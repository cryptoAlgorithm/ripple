class TextField {
  constructor(elem) {
    this.elem = elem;
    this.txtF = elem.querySelector('input');
    
    console.log(this.txtF);
    
    this.txtF.onfocus = () =>  this.elem.classList.add('focus');
    this.txtF.onblur = () => {
      if (this.txtF.value.length > 0) this.elem.classList.add('has-content');
      else this.elem.classList.remove('has-content');
      this.elem.classList.remove('focus');
    }
  }
}
