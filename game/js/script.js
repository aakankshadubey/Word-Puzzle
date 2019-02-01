$(() => {
    function getAllData(detectWord) {
        // get a single word and count
        $.get('/getData', detectWord)

    }
    var turn = 3

    getAllData((obj) => {
        let word = obj.word
        // game is finished
        if (word.length == 0) {
            document.getElementById("end").style.height = "300px"
            document.getElementById("end").style.visibility = "visible"
            $('#end').html(`Game Finished
              Your Total Score Is : ${obj.count}`)

        }

        // code injection in div 'code' for displaying buttons
        if (word.length == 3) {
            $('#code').html(`<div class = "first"></div>
        <div class = "second"></div>`)
            three(word)
        }

        if (word.length == 4) {
            $('#code').html(`<div class = "first"></div>
        <div class = "second"></div>
        <div class = "third"></div>`)
            four(word)
        }
        if (word.length == 5) {
            $('#code').html(`<div class = "first"></div>
        <div class = "second"></div>
        <div class = "fourth"></div>`)
            five(word)
        }

        if (word.length == 6) {
            $('#code').html(`<div class = "first"></div>
        <div class = "second"></div>
        <div class = "sixth"></div>`)
            six(word)
        }

        // detection of correct sequence
        let alpha = $('.button5')
        let wordDetected = false



        function detectWord(stringDetected, id) {
            $('#append').append(`<button   class = "button button5">${id}</button>`)


            if (stringDetected.length === word.length) {

                if (word == stringDetected.join('')) {
                    wordDetected = true
                }
            }

        }

        let stringDetected = []
        $('#reset').on('click', function (event) {

            stringDetected = []
            $('#append').empty()

        })

        alpha.on('click', function (event) {

            event.stopPropagation();
            event.stopImmediatePropagation();

            stringDetected.push(this.id)

            detectWord(stringDetected, this.id)

            if (wordDetected) {
                document.getElementById("code").style.visibility = "hidden"

                document.getElementById("code").style.height = 0
                document.getElementById("hidden").style.height = "300px"
                document.getElementById("hidden").style.visibility = "visible"

                $('#hidden').html(`Your Total Score Is : ${obj.count}
                <button type = "button" class = "btn btn-secondary btn-lg" id = "next">NEXT</button>

                `)

                $('#next').click(() => {
                    location.reload()

                })

            } else {
                if (stringDetected.length === word.length) {
                    turn = turn - 1
                    // if player took 3 wrong attempts 
                    if (turn == 0) {

                        document.getElementById("gameOver").style.height = "300px"
                        document.getElementById("gameOver").style.visibility = "visible"

                    }
                    // else, try again
                    document.getElementById("failed").style.height = "300px"
                    document.getElementById("failed").style.visibility = "visible"
                    $('#play').click(() => {
                        document.getElementById("failed").style.height = 0
                        document.getElementById("failed").style.visibility = "hidden"
                        stringDetected = []
                        $('#append').empty()
                    })


                }
            }


        })


    })






})