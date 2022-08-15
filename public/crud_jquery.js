//-----------------------------------------------
//        DISPLAY AND HIDE COLLECTIONS FUNCTIONS
//-----------------------------------------------
const showShirts = () => {
  $(`.shirts`).removeClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)

  $(`.shirtsBtn`).addClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showPants = () => {
  $(`.pants`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)

  $(`.pantsBtn`).addClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showSkirts = () => {
  $(`.skirts`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)

  $(`.skirtsBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showKids = () => {
  $(`.kids`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)

  $(`.kidsBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
}
const showMisc = () => {
  $(`.misc`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)

  $(`.miscBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
}
// const showTop = () => {
//   $(`.misc`).addClass(`hidden`)
//   $(`.bottom`).addClass(`hidden`)
//   $(`.top`).removeClass(`hidden`)
//
//   $(`.topBtn`).addClass(`selected`)
//   $(`.bottomBtn`).removeClass(`selected`)
//   $(`.miscBtn`).removeClass(`selected`)
// }
// const showBottom = () => {
//   $(`.misc`).addClass(`hidden`)
//   $(`.top`).addClass(`hidden`)
//   $(`.bottom`).removeClass(`hidden`)
//
//   $(`.topBtn`).removeClass(`selected`)
//   $(`.bottomBtn`).addClass(`selected`)
//   $(`.miscBtn`).removeClass(`selected`)
// }
// const showMisc = () => {
//   $(`.top`).addClass(`hidden`)
//   $(`.bottom`).addClass(`hidden`)
//   $(`.misc`).removeClass(`hidden`)
//
//   $(`.topBtn`).removeClass(`selected`)
//   $(`.bottomBtn`).removeClass(`selected`)
//   $(`.miscBtn`).addClass(`selected`)
// }


$(() => {
  //-----------------------------------------------
  //        DISPLAY AND HIDE COLLECTIONS BUTTONS
  //-----------------------------------------------
  // $(`.topBtn`).on(`click`, showTop)
  // $(`.bottomBtn`).on(`click`, showBottom)
  // $(`.miscBtn`).on(`click`, showMisc)


  $(`.shirtsBtn`).on(`click`, showShirts)
  $(`.pantsBtn`).on(`click`, showPants)
  $(`.skirtsBtn`).on(`click`, showSkirts)
  $(`.kidsBtn`).on(`click`, showKids)
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
