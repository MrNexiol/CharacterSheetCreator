class CreateImplications < ActiveRecord::Migration[6.0]
  def change
    create_table :implications do |t|
      t.string :name
      t.string :description
      t.boolean :is_advantage
      t.integer :max_level
      t.integer :point_cost
    end
  end
end
