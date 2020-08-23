import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['exp', 'brawn', 'deter', 'intel', 'perce', 'dexte', 'agili', 'plus', 'minus']

  addExp(target){
    const expPoints = parseInt(this.expTarget.value);
    switch (parseInt(target.value)) {
      case 19:
        this.expTarget.value = expPoints + 20
        break
      case 18:
      case 17:
      case 16:
        this.expTarget.value = expPoints + 15
        break
      case 15:
      case 14:
      case 13:
        this.expTarget.value = expPoints + 10
        break
      default:
        this.expTarget.value = expPoints + 5
        break
    }
  }

  cutExp(target){
    const expPoints = parseInt(this.expTarget.value);
    switch (parseInt(target.value)) {
      case 20:
        this.expTarget.value = expPoints - 20
        break
      case 19:
      case 18:
      case 17:
        this.expTarget.value = expPoints - 15
        break
      case 16:
      case 15:
      case 14:
        this.expTarget.value = expPoints - 10
        break
      default:
        this.expTarget.value = expPoints - 5
        break
    }
  }

  changeValue(button, target){
    const id = button.dataset.id
    if (button.innerHTML == '-'){
      target.value--
      this.addExp(target)
      this.plusTargets[id].disabled = false
      if (target.value == 7){
        button.disabled = true
      }
    }else{
      target.value++
      this.cutExp(target)
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
