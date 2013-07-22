
  // Save variables to modify
  var SliderVar = {
      sliderHead: jQuery('.slider-head-link li'),
      sliderContent: jQuery('.brand-primary-bg div'),
      currentSliderHead: jQuery(this.slideHead).find('.active'),
      currentSliderContent: jQuery('.brand-primary-bg div.active').index('.brand-primary-bg div'),
      currentSlider: jQuery('.slider-head-link li.active').index('.slider-head-link li'),
      slideTotalCount: jQuery('.slider-head-link').find('li').size() - 1
    };
  
  var sliderStates = ['active', 'transition', 'inactive']; 
  
  var sliderApp = {
    // Create functions
    inititalize: function(){
      console.log('Slider initialized.');
      this.autoCycle();
    },
    autoCycle: function(){
      console.log('Autocycle begin.');
      this.passTime();
      this.selectNext();
    },
    checkIfLastSlide: function(){
      if (SliderVar.currentSlider == SliderVar.slideTotalCount){
        return true;
      } else {
        return false;
      };
    },
    resetSlideCount: function(){
      SliderVar.currentSlider == 0;
      console.log('Slide count reset.');
    },
    selectNext: function(){

      if (this.checkIfLastSlide != false){
        this.incrementSlide();
      } else {
        this.resetSlideCount();
      };
      
      this.loadSlide(SliderVar.currentSlider);
      console.log('Next slide selected.');
    },
    incrementSlide: function(){
      SliderVar.currentSlider++;
      console.log('Slide count '+ SliderVar.currentSlider +'.');
    },
    resetSlideCount: function(){
      SliderVar.currentSlider == 0;
      console.log('Slide count '+ SliderVar.currentSlider +'.');
    },
    loadSlide: function(){
      console.log('Slide load begun.');
      SliderVar.currentSliderHead = jQuery(this).find(SliderVar.sliderHead); 
      SliderVar.currentSliderContent = jQuery(this).find(SliderVar.sliderContent); 
      
      SliderVar.sliderHead.find('.active').removeClass('active');
    },
    removeSlideClass: function(){
      console.log('Previous slide head was ' + SliderVar.currentSlider + '.');
      SliderVar.sliderHead.removeClass('active');
    },
    updateSlideCount: function(){
      SliderVar.currentSlider = jQuery('.slider-head-link li.active').index('.slider-head-link li');
    },
    notifyCurrentSlide: function(){
      this.updateSlideCount();
      console.log('Current slide head is now ' + SliderVar.currentSlider + '.');
    },
    passTime: function(){
    },
    resetSlideContent: function () {
      SliderVar.sliderContent.removeClass('active');
    },
    applyActiveSlideContent: function () {
      jQuery(SliderVar.sliderContent).eq(SliderVar.currentSlider).addClass('active'); 
    },
    activateActiveSlideContent: function () {
      // body...
    }
  };
  // Activate

  jQuery(function(jQuery){
    sliderApp.inititalize();
    sliderApp.autoCycle();
    
    jQuery(SliderVar.sliderHead).click(function(event){
      sliderApp.removeSlideClass();
      jQuery(this).addClass('active');
      sliderApp.notifyCurrentSlide();
    });

  });


