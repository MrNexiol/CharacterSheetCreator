class CreateCharacterSheetImplications < ActiveRecord::Migration[6.0]
  def change
    create_table :character_sheet_implications do |t|
      t.belongs_to :character_sheet
      t.belongs_to :implication
      t.timestamps
    end
  end
end
