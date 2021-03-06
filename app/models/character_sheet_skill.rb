# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheet_skills
#
#  id                 :integer          not null, primary key
#  skill_id           :integer
#  character_sheet_id :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  value              :integer
#
class CharacterSheetSkill < ApplicationRecord
  belongs_to :skill
  belongs_to :character_sheet

  delegate :name, to: :skill

  validates :value, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 25 }
end
