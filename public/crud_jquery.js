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








$(() => {

  $(`.topBtn`).on(`click`, showTop)
  $(`.bottomBtn`).on(`click`, showBottom)
  $(`.miscBtn`).on(`click`, showMisc)

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
