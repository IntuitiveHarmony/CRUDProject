//-----------------------------------------------
//        DISPLAY AND HIDE COLLECTIONS FUNCTIONS
//-----------------------------------------------
const showTop = () => {
  $(`.misc`).addClass(`hidden`)
  $(`.bottom`).addClass(`hidden`)
  $(`.top`).removeClass(`hidden`)
  $(`.topBtn`).addClass(`selected`)
  $(`.bottomBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showBottom = () => {
  $(`.misc`).addClass(`hidden`)
  $(`.top`).addClass(`hidden`)
  $(`.bottom`).removeClass(`hidden`)
  $(`.topBtn`).removeClass(`selected`)
  $(`.bottomBtn`).addClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showMisc = () => {
  $(`.top`).addClass(`hidden`)
  $(`.bottom`).addClass(`hidden`)
  $(`.misc`).removeClass(`hidden`)
  $(`.topBtn`).removeClass(`selected`)
  $(`.bottomBtn`).removeClass(`selected`)
  $(`.miscBtn`).addClass(`selected`)
}


$(() => {
  //-----------------------------------------------
  //        DISPLAY AND HIDE COLLECTIONS BUTTONS
  //-----------------------------------------------
  $(`.topBtn`).on(`click`, showTop)
  $(`.bottomBtn`).on(`click`, showBottom)
  $(`.miscBtn`).on(`click`, showMisc)


  //-----------------------------------------------
  //        HOVER OVER BUTTONS/LINKS
  //-----------------------------------------------
  $(`.navLink`).hover(function() {
    $(this).addClass(`focus`)
      }, function() {
        $(this).removeClass(`focus`).removeAttr(`id`, `current`)
    })
  $(`.collectionLink`).hover(function() {
    $(this).addClass(`focus`)
      }, function() {
        $(this).removeClass(`focus`).removeAttr(`id`, `current`)
    })
})






//
