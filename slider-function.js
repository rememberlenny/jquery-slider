
  // Save variables to modify
  var SliderVar = {
      sliderHead: jQuery('.slider-head-link'),
      sliderContent: jQuery('.panel-contexts'),
      currentSliderHead: jQuery(this.slideHead).find('.active'),
      currentSliderContent: jQuery(this.slideContent).find('.active'),
      currentSlider: 0,
      slideTotalCount: jQuery('.slider-head-link').find('li').size() - 1
    };
  
  var sliderStates = ['active', 'transition', 'inactive']; 
  
  var sliderApp = {
    // Create functions
    inititalize: function(){
      console.log('Slider initialized.');
      this.loadSlide();
      this.autoCycle();
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
    autoCycle: function(){
      console.log('Autocycle begin.');
      this.passTime();
      this.selectNext();  
    },
    loadSlide: function(){;
      console.log('Slide load begun.');
      SliderVar.currentSliderHead = jQuery(this).find(SliderVar.sliderHead); 
      SliderVar.currentSliderContent = jQuery(this).find(SliderVar.sliderContent); 
      
      SliderVar.sliderHead.find('.active').removeClass('active');
      SliderVar.currentSliderHead.addClass('active');
      SliderVar.sliderContent.find('.active').removeClass('active');
      SliderVar.currentSliderHead.addClass('active');
    },
    passTime: function(){
    }
  };
  // Activate

  jQuery(function(jQuery){
    sliderApp.inititalize();
    sliderApp.autoCycle();
  
    jQuery(SliderVar.sliderHead).click(function(event){
      alert( event.currentTarget === this);
    });
  });


