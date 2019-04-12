class LicenseCode < ApplicationRecord
  has_secure_token :code
  belongs_to :user
end