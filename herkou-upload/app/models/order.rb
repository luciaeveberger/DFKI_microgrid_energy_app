class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items

  enum status: { in_progress: 0, pending: 1, active: 2 }

  before_validation :set_order_status
  before_save :update_subtotal

  def subtotal
    order_items.collect { |oi| oi.valid? ? (oi.quantity * oi.unit_price) : 0 }.sum
  end

  def self.finished_orders
    where(status: :active).order(created_at: :asc)
  end

  def self.pending_orders
    where(status: :pending).order(created_at: :asc)
  end

  def self.bought_orders
    where.not(status: :in_progress).order(created_at: :asc)
  end

  private

  def set_order_status
    self.in_progress! if self.status.nil?
  end

  def update_subtotal
    self[:subtotal] = subtotal
  end
end
