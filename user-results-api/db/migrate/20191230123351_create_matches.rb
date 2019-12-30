class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.references :user, foreign_key: true
      t.boolean :win
      t.datetime :time
      t.string :opponent

      t.timestamps
    end
  end
end
