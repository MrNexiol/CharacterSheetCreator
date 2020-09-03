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
require 'test_helper'

class CharacterSheetSkillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
