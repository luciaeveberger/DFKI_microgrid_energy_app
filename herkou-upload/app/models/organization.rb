class Organization < ApplicationRecord
  belongs_to :user, dependent: :destroy
end
