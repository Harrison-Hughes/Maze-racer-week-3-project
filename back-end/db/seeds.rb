# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do 
    User.create(name: Faker::FunnyName.name)
end 


Match.create(user_id: User.first.id, win: true , time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.second.id, win: true , time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.third.id, win: true , time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.fourth.id, win: false , time: Time.now, opponent:User.all.sample.name)
Match.create(user_id: User.fifth.id, win: false , time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: false, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: false, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: false, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: false, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
Match.create(user_id: User.all.sample.id, win: true, time: Time.now, opponent: User.all.sample.name)
