class CreateSkillsAndCharacterSheetSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :value
      t.string :parent_stat
      t.timestamps
    end

    create_table :character_sheet_skills do |t|
      t.belongs_to :skill
      t.belongs_to :character_sheet
      t.timestamps
    end
  end
end
