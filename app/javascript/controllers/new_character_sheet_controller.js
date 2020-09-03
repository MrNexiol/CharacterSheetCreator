import {Controller} from "stimulus"

export default class extends Controller {
  static targets = ['exp', 'stat', 'skill', 'plus', 'minus', 'plusSkill', 'minusSkill', 'radio', 'disadvantageCurrent', 'disadvantageReal', 'disadvantageMax']

  connect(){
    this.checkPoints()
  }

  changeExpFromImplication(e){
    const group = this.radioTargets.filter(obj => {
      return obj.dataset.group == e.target.dataset.group
    })
    const prev = group.find(obj => {
      return obj.hasAttribute("checked")
    })
    if(e.target.dataset.isadvantage == "true"){
      if (prev) {
        if (parseInt(prev.value) < parseInt(e.target.value)) {
          this.expTarget.value = parseInt(this.expTarget.value) - (parseInt(e.target.value) - parseInt(prev.value))
        } else {
          this.expTarget.value = parseInt(this.expTarget.value) + (parseInt(prev.value) - parseInt(e.target.value))
        }
        prev.removeAttribute("checked")
      }else{
        this.expTarget.value = parseInt(this.expTarget.value) - (parseInt(e.target.value))
      }
      e.target.setAttribute("checked", "")
    } else{
      if (prev){
        if (parseInt(prev.value) > parseInt(e.target.value)){
          let beforeReductionPoints = parseInt(this.disadvantageRealTarget.innerHTML)
          this.disadvantageRealTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML) - (parseInt(prev.value) - parseInt(e.target.value))
          if(parseInt(this.disadvantageRealTarget.innerHTML) >= parseInt(this.disadvantageMaxTarget.innerHTML)){
            this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageMaxTarget.innerHTML)
          }else{
            let pointsToReduce = beforeReductionPoints - parseInt(this.disadvantageRealTarget.innerHTML)
            this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML)
            this.expTarget.value = parseInt(this.expTarget.value) - pointsToReduce
          }
          prev.removeAttribute("checked")
        }else if (parseInt(prev.value) < parseInt(e.target.value)){
          let beforeAdditionPoints = parseInt(this.disadvantageRealTarget.innerHTML)
          this.disadvantageRealTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML) + (parseInt(e.target.value) - parseInt(prev.value))
          if(parseInt(this.disadvantageRealTarget.innerHTML) >= parseInt(this.disadvantageMaxTarget.innerHTML)){
            this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageMaxTarget.innerHTML)
            if(beforeAdditionPoints < parseInt(this.disadvantageMaxTarget.innerHTML)){
              let pointsToAdd = parseInt(this.disadvantageMaxTarget.innerHTML) - beforeAdditionPoints
              this.expTarget.value = parseInt(this.expTarget.value) + pointsToAdd
            } else {

            }
          }else{
            this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML)
            this.expTarget.value = parseInt(this.expTarget.value) + parseInt(this.disadvantageRealTarget.innerHTML) - beforeAdditionPoints
          }
          prev.removeAttribute("checked")
        }
      }else{
        let beforeAdditionPoints = parseInt(this.disadvantageRealTarget.innerHTML)
        this.disadvantageRealTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML) + parseInt(e.target.value)
        if(parseInt(this.disadvantageRealTarget.innerHTML) >= parseInt(this.disadvantageMaxTarget.innerHTML)){
          this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageMaxTarget.innerHTML)
          this.expTarget.value = parseInt(this.expTarget.value) + parseInt(this.disadvantageMaxTarget.innerHTML) - beforeAdditionPoints
        }else{
          this.disadvantageCurrentTarget.innerHTML = parseInt(this.disadvantageRealTarget.innerHTML)
          this.expTarget.value = parseInt(this.expTarget.value) + parseInt(this.disadvantageRealTarget.innerHTML) - beforeAdditionPoints
        }
      }
      e.target.setAttribute("checked", "")
    }
    this.checkPoints()
  }

  checkPoints(){
    this.checkStatLevels()
    this.checkSkillLevels()
    this.checkImplications()
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

  getSkillByEqualityToStat(id){
    return this.skillTargets.find(obj => {
      return obj.dataset.parent == id && obj.dataset.isequal == "true"
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
    let skill = this.getSkillByEqualityToStat(buttonId)
    if (e.target.innerHTML == '+'){
      this.changeExpFromStat(parseInt(this.statTargets[buttonId].value), true)
      this.statTargets[buttonId].value++
      if (skill && parseInt(skill.value) < parseInt(this.statTargets[buttonId].value)) {
        skill.value = parseInt(this.statTargets[buttonId].value)
      }
    } else {
      this.changeExpFromStat(parseInt(this.statTargets[buttonId].value), false)
      this.statTargets[buttonId].value--
      if (skill && (parseInt(skill.value) - parseInt(this.statTargets[buttonId].value)) == 1) {
        skill.value = parseInt(this.statTargets[buttonId].value)
      }
    }
    if (skill){
      skill.dataset.base = parseInt(this.statTargets[buttonId].value)
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

  checkImplications(){
    for (let i = 0; i < this.radioTargets.length; i++){
      const radio = this.radioTargets[i]
      const group = this.radioTargets.filter(obj => {
        return obj.dataset.group == radio.dataset.group
      })
      const checkedRadio = group.find(obj => {
        return obj.hasAttribute("checked")
      })
      if (checkedRadio){
        if (parseInt(checkedRadio.value) == parseInt(radio.value)){
          radio.disabled = false
        } else if (parseInt(checkedRadio.value) > parseInt(radio.value)){
          radio.disabled = false
        } else {
          const testValue = parseInt(radio.value) - parseInt(checkedRadio.value)
          radio.disabled = testValue > parseInt(this.expTarget.value);
        }
      }else{
        radio.disabled = parseInt(radio.value) > parseInt(this.expTarget.value);
      }
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
      const skill = this.skillTargets[i]
      const parentId = skill.dataset.parent
      const skillId = skill.dataset.id
      this.getSkillButtonById(skillId, false).disabled = parseInt(skill.value) <= parseInt(skill.dataset.base);
      if (parseInt(skill.value) < parseInt(this.statTargets[parentId].value) && parseInt(skill.value) < 25){
        this.getSkillButtonById(skillId, true).disabled = parseInt(this.expTarget.value) <= 0;
      }else if (parseInt(skill.value) >= parseInt(this.statTargets[parentId].value) && parseInt(skill.value) < 25) {
        this.getSkillButtonById(skillId, true).disabled = parseInt(this.expTarget.value) < (parseInt(skill.value) - parseInt(this.statTargets[parentId].value))+2;
      } else {
        this.getSkillButtonById(skillId, true).disabled = true
      }
    }
  }
}
