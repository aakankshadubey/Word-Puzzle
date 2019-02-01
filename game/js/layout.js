let fCode = ''
let sCode = ''
let tCode = ''
let fiCode = ''
let sixCode = ''

let count = 0
let min = 0
let wordArray = []

function three(word) {
    let max = word.length - 1


    // Random alphabet choosing

    while (count <= max) {

        let x = Math.round(Math.random() * (max - min)) + min

        if (wordArray.indexOf(word[x]) == -1) {

            if (count == 0) {

                fCode = fCode + `<button   class = "button button5" id = '${word[x]}'>${word[x]}</button>`

            } else {
                sCode = sCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            }

            count++
            wordArray.push(word[x])
        }



    }
    $('.first').html(fCode)
    $('.second').html(sCode)
}


function four(word) {
    let max = word.length - 1


    while (count <= max) {

        let x = Math.round(Math.random() * (max - min)) + min

        if (wordArray.indexOf(word[x]) == -1) {

            if (count == 0) {

                fCode = fCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else if (count == 1 || count == 2) {
                sCode = sCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else {
                tCode = tCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`
            }

            count++
            wordArray.push(word[x])
        }



    }
    $('.first').html(fCode)
    $('.second').html(sCode)
    $('.third').html(tCode)

}


function five(word) {
    let max = word.length - 1

    while (count <= max) {

        let x = Math.round(Math.random() * (max - min)) + min

        if (wordArray.indexOf(word[x]) == -1) {

            if (count == 0) {

                fCode = fCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else if (count == 1 || count == 2) {
                sCode = sCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else {
                fiCode = fiCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`
            }

            count++
            wordArray.push(word[x])
        }



    }
    $('.first').html(fCode)
    $('.second').html(sCode)
    $('.fourth').html(fiCode)

}

function six(word) {
    let max = word.length - 1

    while (count <= max) {

        let x = Math.round(Math.random() * (max - min)) + min

        if (wordArray.indexOf(word[x]) == -1) {


            if (count == 0) {

                fCode = fCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else if (count == 1 || count == 2) {
                sCode = sCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`

            } else if (count == 3 || count == 4 || count == 5) {
                sixCode = sixCode + `<button   class = "button button5" id = "${word[x]}">${word[x]}</button>`
            }

            count++
            wordArray.push(word[x])
        }



    }

    $('.first').html(fCode)
    $('.second').html(sCode)
    $('.sixth').html(sixCode)

}