# frozen_string_literal: true

# == Schema Information
#
# Table name: skills
#
#  id          :integer          not null, primary key
#  name        :string
#  parent_stat :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Skill < ApplicationRecord
  has_many :character_sheet_skills, dependent: :destroy
  has_many :character_sheets, through: :character_sheet_skills

  attr_reader :value

  STAT_NAMES = %w[brawn determination intelligence perception dexterity agility].freeze
end
