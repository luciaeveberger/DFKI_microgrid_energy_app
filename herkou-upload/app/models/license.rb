class License < ApplicationRecord
  has_many :order_items
  enum duration: { days: 0, weeks: 1, months: 2, years: 3, unlimited: 4 }

  validates :title, :price, presence: true, length: { maximum: 1000 }
  validates :description, presence: true, length: { maximum: 10000 }

  def duration_as_string
    if unlimited?
      duration
    else
      "#{duration_quantity} #{duration}"
    end
  end

  def expiration_date
    unlimited? ? DateTime::Infinity.new : duration_quantity.send(duration).from_now
  end
end