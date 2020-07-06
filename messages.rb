FactoryBot.define do
  factory :message do
    content {Facker: Lorem.sentence}
    image {File.open("")}
  end
end