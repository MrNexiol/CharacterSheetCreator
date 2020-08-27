import {Controller} from "stimulus"

export default class extends Controller {
  static targets = ['exp', 'stat', 'skill', 'plus', 'minus', 'plusSkill', 'minusSkill']

  connect(){
    this.checkPoints()
  }

  checkPoints(){
    this.checkStatLevels()
    this.checkSkillLevels()
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

  getSkillButtonById(id, isPlus){
    if (isPlus){
      return this.plusSkillTargets.find(obj => {
        return obj.dataset.id == id
      })
    }else{
      return this.minusSkillTargets.find(obj => {
        return obj.dataset.id == id
      })
    }
  }

  getSkillById(id){
    return this.skillTargets.find(obj => {
      return obj.dataset.id == id
    })
  }

  changeSkill(e){
    const buttonId = e.target.dataset.id
    const skill = this.getSkillById(buttonId)
    if (e.target.innerHTML == '+') {
      this.changeExpFromSkill(skill, true)
      skill.value++
    }else {
      this.changeExpFromSkill(skill, false)
      skill.value--
    }
    this.checkPoints()
  }

  changeStat(e){
    const buttonId = e.target.dataset.id
    if (e.target.innerHTML == '+'){
      this.changeExpFromStat(parseInt(this.statTargets[buttonId].value), true)
      this.statTargets[buttonId].value++
    } else {
      this.changeExpFromStat(parseInt(this.statTargets[buttonId].value), false)
      this.statTargets[buttonId].value--
    }
    this.checkPoints()
  }

  changeExpFromSkill(skill, isAdding){
    if (parseInt(skill.value) < parseInt(this.statTargets[skill.dataset.parent].value)) {
      isAdding ? this.expTarget.value = parseInt(this.expTarget.value) - 1 : this.expTarget.value = parseInt(this.expTarget.value) + 1
    }else {
      isAdding ? this.expTarget.value = parseInt(this.expTarget.value) - (parseInt(skill.value) - parseInt(this.statTargets[skill.dataset.parent].value) + 2) :
          this.expTarget.value = parseInt(this.expTarget.value) + (parseInt(skill.value) - parseInt(this.statTargets[skill.dataset.parent].value) + 1)
    }
  }

  changeExpFromStat(statValue, isAdding){
    switch (statValue) {
      case 20:
        this.expTarget.value = parseInt(this.expTarget.value) + 20
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

  checkStatLevels(){
    for (let i = 0; i < this.statTargets.length; i++){
      const canUpgrade = this.isStatUpgradeable(parseInt(this.statTargets[i].value));
      this.plusTargets[i].disabled = !canUpgrade;
      this.minusTargets[i].disabled = parseInt(this.statTargets[i].value) < 1;
    }
  }

  checkSkillLevels(){
    for (let i = 0; i < this.skillTargets.length; i++){
      const parentId = this.skillTargets[i].dataset.parent
      const skillId = this.skillTargets[i].dataset.id
      this.getSkillButtonById(skillId, false).disabled = parseInt(this.skillTargets[i].value) <= parseInt(this.skillTargets[i].dataset.base);

      if (parseInt(this.skillTargets[i].value) < parseInt(this.statTargets[parentId].value) && parseInt(this.skillTargets[i].value) < 25){
        this.getSkillButtonById(skillId, true).disabled = parseInt(this.expTarget.value) <= 0;
      }else if (parseInt(this.skillTargets[i].value) >= parseInt(this.statTargets[parentId].value) && parseInt(this.skillTargets[i].value) < 25) {
        this.getSkillButtonById(skillId, true).disabled = parseInt(this.expTarget.value) < (parseInt(this.skillTargets[i].value) - parseInt(this.statTargets[parentId].value))+2;
      } else {
        this.getSkillButtonById(skillId, true).disabled = true
      }
    }
  }
}
