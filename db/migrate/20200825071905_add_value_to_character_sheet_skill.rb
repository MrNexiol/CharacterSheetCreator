class AddValueToCharacterSheetSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :character_sheet_skills, :value, :integer
  end
end
