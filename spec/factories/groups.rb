FactoryBot.define do
  factry :group do
    name{Faker: :Team.name}
  end
end