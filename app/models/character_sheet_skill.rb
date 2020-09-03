# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheet_skills
#
#  id                 :integer          not null, primary key
#  value              :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  character_sheet_id :integer
#  skill_id           :integer
#
# Indexes
#
#  index_character_sheet_skills_on_character_sheet_id  (character_sheet_id)
#  index_character_sheet_skills_on_skill_id            (skill_id)
#
class CharacterSheetSkill < ApplicationRecord
  belongs_to :skill
  belongs_to :character_sheet

  delegate :name, to: :skill

  validates :value, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 25 }
end
