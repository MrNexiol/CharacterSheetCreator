import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['exp', 'stat', 'plus', 'minus']

  connect(){
    this.checkStatLevels()
  }

  checkStatLevels(){
    for (let i = 0; i < this.statTargets.length; i++){
      const canUpgrade = this.isStatUpgradeable(parseInt(this.statTargets[i].value));
      this.plusTargets[i].disabled = !canUpgrade;
    }
  }

  isStatUpgradeable(testValue){
    const expPoints = this.expTarget.value
    switch (testValue) {
      case 20:
        return false
      case 19:
        return (expPoints - 20) >= 0;
      case 18:
      case 17:
      case 16:
        return (expPoints - 15) >= 0;
      case 15:
      case 14:
      case 13:
        return (expPoints - 10) >= 0;
      default:
        return (expPoints - 5) >= 0;
    }
  }

  changeStat(e){
    const buttonId = e.target.dataset.id
    if (e.target.innerHTML == '+'){
      this.changeExp(parseInt(this.statTargets[buttonId].value), true)
      this.statTargets[buttonId].value++
    } else {
      this.changeExp(parseInt(this.statTargets[buttonId].value), false)
      this.statTargets[buttonId].value--
    }
    this.checkStatLevels()
  }

  changeExp(statValue, isAdding){
    switch (statValue) {
      case 20:
        this.expTarget.value += 20
        break
      case 19:
        isAdding ? this.expTarget.value -= 20 : this.expTarget.value = parseInt(this.expTarget.value) + 15
        break
      case 18:
      case 17:
        isAdding ? this.expTarget.value -= 15 : this.expTarget.value = parseInt(this.expTarget.value) + 15
        break
      case 16:
        isAdding ? this.expTarget.value -= 15 : this.expTarget.value = parseInt(this.expTarget.value) + 10
        break
      case 15:
      case 14:
        isAdding ? this.expTarget.value -= 10 : this.expTarget.value = parseInt(this.expTarget.value) + 10
        break
      case 13:
        isAdding ? this.expTarget.value -= 10 : this.expTarget.value = parseInt(this.expTarget.value) + 5
        break
      default:
        isAdding ? this.expTarget.value -= 5 : this.expTarget.value = parseInt(this.expTarget.value) + 5
        break
    }
  }
}
