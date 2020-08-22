class CreateCharacterSheets < ActiveRecord::Migration[6.0]
  def change
    create_table :character_sheets do |t|
      t.string :name
      t.integer :experience

      t.timestamps
    end
  end
end
