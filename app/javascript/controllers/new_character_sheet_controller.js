import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['brawn', 'deter', 'intel', 'perce', 'dexte', 'agili', 'plus', 'minus']

  changeValue(button, target){
    const id = button.dataset.id
    if (button.innerHTML == '-'){
      target.value--
      this.plusTargets[id].disabled = false
      if (target.value == 7){
        button.disabled = true
      }
    }else{
      target.value++
      this.minusTargets[id].disabled = false
      if (target.value == 20){
        button.disabled = true
      }
    }
  }

  changeStat(){
    const eventTarget = event.target
    switch (eventTarget.dataset.id) {
      case '0':
        this.changeValue(eventTarget, this.brawnTarget)
        break
      case '1':
        this.changeValue(eventTarget, this.deterTarget)
        break
      case '2':
        this.changeValue(eventTarget, this.intelTarget)
        break
      case '3':
        this.changeValue(eventTarget, this.perceTarget)
        break
      case '4':
        this.changeValue(eventTarget, this.dexteTarget)
        break
      case '5':
        this.changeValue(eventTarget, this.agiliTarget)
        break
      default:
        console.log('Error')
    }
  }
}
