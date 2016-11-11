var fs = require('fs')
var async = require('async');

function String_Matcher() {

    this.badwords = fs.readFileSync(__dirname + '/words.csv').toString().split(",");

    this.scan = function(text, done) {
        // remove meaningless chars and pad with spaces to make detection better
        text.replace(/[-_=\+\/\\\.<>\?\*;\(\)\{\}:]/g, ' ')
        text = ' ' + text + ' '

        var profane = []
        this.badwords.forEach(function(word) {
            if (~text.indexOf(' ' + word + ' ')) {
                profane.push(word);
            }
        })

        return profane
    }

    this.add_word = function(word) {
        if(typeof word === 'Object')
        {
            if(word.length>0)
            {
                async.each(word,function(w,callback){
                    if(w!=='')
                    {

                        this.badwords.push(w);
                        callback();
                    }
                    else
                    {
                        callback();
                    }
                },function(){
                    return save_words(this.badwords)
                });
            }
        }
        else
        {

            this.badwords.push(word)
            return save_words(this.badwords)
        }
    }

    this.remove_word = function(word) {
        var index = this.badwords.indexOf(word)
        if (index != -1) {
            this.badwords.splice(index, 1)
            return save_words(this.badwords)
        } else {
            return false
        }
    }

    function save_words(badwords) {
        try {
            fs.writeFileSync(__dirname + '/words.csv', badwords.join())
            return true
        } catch (e) {
            return false
        }
    }

}

module.exports = String_Matcher

if (require.main == module) {

    var pf = new String_Matcher()
    var assert = require('assert');
    console.log(pf.scan('hello there'));
    assert(pf.scan('hello there!') == ['hello'], 'detects simple hello word')
    

}
