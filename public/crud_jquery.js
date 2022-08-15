//-----------------------------------------------
//        DISPLAY AND HIDE COLLECTIONS FUNCTIONS
//-----------------------------------------------
const showTop = () => {
  $(`.misc`).addClass(`hidden`)
  $(`.bottom`).addClass(`hidden`)
  $(`.top`).removeClass(`hidden`)
}
const showBottom = () => {
  $(`.misc`).addClass(`hidden`)
  $(`.top`).addClass(`hidden`)
  $(`.bottom`).removeClass(`hidden`)
}
const showMisc = () => {
  $(`.top`).addClass(`hidden`)
  $(`.bottom`).addClass(`hidden`)
  $(`.misc`).removeClass(`hidden`)
}
// const sCollection = () => {
//   $(`.collection`).addClass(`selected`)
//   $(`.collectionLink`).removeClass(`hidden`)
// }

$(() => {
  //-----------------------------------------------
  //        DISPLAY AND HIDE COLLECTIONS BUTTONS
  //-----------------------------------------------
  $(`.topBtn`).on(`click`, showTop)
  $(`.bottomBtn`).on(`click`, showBottom)
  $(`.miscBtn`).on(`click`, showMisc)

  // $(`.collection`).on(`click`, sCollection)

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
