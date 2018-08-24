   
    var words = ['rupee', 'zora', 'goron','cuccos','deku','epona','fairy','ganon','ganondorf','gerudo','hookshot','kokiri','link','zelda','impa','ocarina','octorok','triforce','hyrule'];
    //created object named game. then nested functions within for each guess letter, right letter, wrong letter. I tied alerts to the wrong letter and right letter to when guesses were reduced to zero or the game has been won. 
    var game = {
      
      guessed: [],
      left: 10,
      start: function() {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.$right = document.getElementById("right");
        this.$wrong = document.getElementById("wrong");
        this.$remain = document.getElementById("remain");
        this.$right.innerHTML = "_".repeat(this.word.length);
      },
      guess: function(letter) {
        if (this.left > 0) {
          if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
            this.right(letter);
          } else {
            this.wrong(letter);
          }
        }
      },
      right: function(letter) {
        for(var i = 0; i < this.word.length; i++) {
          if (this.word[i] == letter) {
            var word = this.$right.innerHTML.split("");
            word[i] = letter;
            this.$right.innerHTML = word.join("");
          }
        }
        if (this.$right.innerHTML.indexOf("_") < 0) {
          alert("You've won! with "+ this.word);
          }
      },
      wrong: function(letter) {
        this.guessed.push(letter);
        this.$wrong.innerHTML += " " + letter;
        this.left -- ;
        this.$remain.innerHTML = this.left;
        if (this.left < 1) {
          alert("You've lost! It was " + this.word);
          }
      }
    };
    game.start();
    document.onkeyup = function(event) {
      var letter = String.fromCharCode(event.keyCode).toLowerCase();
      game.guess(letter);
      
    };





  