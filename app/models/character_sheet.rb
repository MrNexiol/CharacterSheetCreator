# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheets
#
#  id            :integer          not null, primary key
#  name          :string
#  experience    :integer          default(150)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  brawn         :integer          default(10)
#  intelligence  :integer          default(10)
#  perception    :integer          default(10)
#  agility       :integer          default(10)
#  dexterity     :integer          default(10)
#  determination :integer          default(10)
#  barter        :float            default(0.0)
#  money         :float            default(0.0)
#  description   :string
#
class CharacterSheet < ApplicationRecord
  has_many :character_sheet_skills, dependent: :destroy
  has_many :skills, through: :character_sheet_skills
  belongs_to :user

  accepts_nested_attributes_for :character_sheet_skills
end
