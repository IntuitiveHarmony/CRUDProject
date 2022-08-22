//-----------------------------------------------
//        DISPLAY AND HIDE COLLECTIONS FUNCTIONS
//-----------------------------------------------
const showShirts = () => {
  $(`.shirts`).removeClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)
  $(`.hoodies`).addClass(`hidden`)

  $(`.shirtsBtn`).addClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
  $(`.hoodiesBtn`).removeClass(`selected`)
}
const showPants = () => {
  $(`.pants`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)
  $(`.hoodies`).addClass(`hidden`)

  $(`.pantsBtn`).addClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
  $(`.hoodiesBtn`).removeClass(`selected`)
}
const showSkirts = () => {
  $(`.skirts`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)
  $(`.hoodies`).addClass(`hidden`)

  $(`.skirtsBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
  $(`.hoodiesBtn`).removeClass(`selected`)
}
const showHoodies = () => {
  $(`.hoodies`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)

  $(`.hoodiesBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
}
const showKids = () => {
  $(`.kids`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.misc`).addClass(`hidden`)
  $(`.hoodies`).addClass(`hidden`)

  $(`.kidsBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.miscBtn`).removeClass(`selected`)
  $(`.hoodiesBtn`).removeClass(`selected`)
}
const showMisc = () => {
  $(`.misc`).removeClass(`hidden`)
  $(`.shirts`).addClass(`hidden`)
  $(`.pants`).addClass(`hidden`)
  $(`.skirts`).addClass(`hidden`)
  $(`.kids`).addClass(`hidden`)
  $(`.hoodies`).addClass(`hidden`)

  $(`.miscBtn`).addClass(`selected`)
  $(`.pantsBtn`).removeClass(`selected`)
  $(`.shirtsBtn`).removeClass(`selected`)
  $(`.skirtsBtn`).removeClass(`selected`)
  $(`.kidsBtn`).removeClass(`selected`)
  $(`.hoodiesBtn`).removeClass(`selected`)
}

//-----------------------------------------------
//    FILTER STYLES DROPDOWN BASED ON CATAGORY
//-----------------------------------------------
const filterStyle = () => {
  let catagoryDrop = $('#catagoryDrop').find('option:selected').text()

  if (catagoryDrop === 'Shirts') {
    $(`.shirtsD`).removeClass(`hidden`)
    $(`.hoodiesD`).addClass(`hidden`)
    $(`.pantsD`).addClass(`hidden`)
    $(`.skirtsD`).addClass(`hidden`)
    $(`.kidsD`).addClass(`hidden`)
    $(`.miscD`).addClass(`hidden`)

  } else if (catagoryDrop === 'Pants') {
    $(`.pantsD`).removeClass(`hidden`)
    $(`.hoodiesD`).addClass(`hidden`)
    $(`.shirtsD`).addClass(`hidden`)
    $(`.skirtsD`).addClass(`hidden`)
    $(`.kidsD`).addClass(`hidden`)
    $(`.miscD`).addClass(`hidden`)

  } else if (catagoryDrop === 'Hoodies') {
    $(`.hoodiesD`).removeClass(`hidden`)
    $(`.pantsD`).addClass(`hidden`)
    $(`.shirtsD`).addClass(`hidden`)
    $(`.skirtsD`).addClass(`hidden`)
    $(`.kidsD`).addClass(`hidden`)
    $(`.miscD`).addClass(`hidden`)

  } else if (catagoryDrop === 'Skirts/ Dresses') {
    $(`.skirtsD`).removeClass(`hidden`)
    $(`.pantsD`).addClass(`hidden`)
    $(`.shirtsD`).addClass(`hidden`)
    $(`.hoodiesD`).addClass(`hidden`)
    $(`.kidsD`).addClass(`hidden`)
    $(`.miscD`).addClass(`hidden`)

  } else if (catagoryDrop === 'Kids') {
    $(`.kidsD`).removeClass(`hidden`)
    $(`.pantsD`).addClass(`hidden`)
    $(`.shirtsD`).addClass(`hidden`)
    $(`.hoodiesD`).addClass(`hidden`)
    $(`.skirtsD`).addClass(`hidden`)
    $(`.miscD`).addClass(`hidden`)

  } else if (catagoryDrop === 'Misc') {
    $(`.miscD`).removeClass(`hidden`)
    $(`.pantsD`).addClass(`hidden`)
    $(`.shirtsD`).addClass(`hidden`)
    $(`.hoodiesD`).addClass(`hidden`)
    $(`.skirtsD`).addClass(`hidden`)
    $(`.kidsD`).addClass(`hidden`)
  } else {
    return
  }


}

//-----------------------------------------------
//        CAROUSEL
//-----------------------------------------------
//  Count steps in picture carousel
let currentImgIndex = 0
//  Length of carousel
let numOfImages = $(`.slideContainer`).children().length - 1
//  Scroll right through pictures hiding current one and display next
$('.lnr-arrow-right-circle').on('click', () => {
  $(`.slideContainer`).children()
    .eq(currentImgIndex)
    .css(`display`, `none`)
//  Loop back through to first Picture at the end of list
if(currentImgIndex < numOfImages) {
  currentImgIndex ++
  } else {
    currentImgIndex = 0
  }
$(`.slideContainer`).children()
  .eq(currentImgIndex)
  .css(`display`, `block`)
  })
//  Scroll left through pictures hiding current one and display previous
$('.lnr-arrow-left-circle').on('click', () => {
  $('.slideContainer').children()
    .eq(currentImgIndex)
    .css('display', 'none')
//  Loop back through to first Picture at the end of list
if(currentImgIndex > 0) {
  currentImgIndex --
  } else {
    currentImgIndex = numOfImages
  }
$('.slideContainer').children()
    .eq(currentImgIndex)
      .css('display', 'block')
})

$(() => {
  //-----------------------------------------------
  //        DISPLAY AND HIDE COLLECTIONS BUTTONS
  //-----------------------------------------------

  $(`.shirtsBtn`).on(`click`, showShirts)
  $(`.pantsBtn`).on(`click`, showPants)
  $(`.skirtsBtn`).on(`click`, showSkirts)
  $(`.hoodiesBtn`).on(`click`, showHoodies)
  $(`.kidsBtn`).on(`click`, showKids)
  $(`.miscBtn`).on(`click`, showMisc)
  $(`.link`).css(`cursor`, `pointer`)

  //-----------------------------------------------
  //       FILTER THE STYLES ON EDIT PAGE (1ST TIME)
  //-----------------------------------------------
  // $(`#filter`).hover(filterStyle)
  // $(`#filter`).on(`click`, filterStyle)

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
