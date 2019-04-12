class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  has_one :organization
  has_many :orders
  has_many :license_codes
  has_many :simulations

  accepts_nested_attributes_for :organization

  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  NAME_REGEX  = /\A(([[:alpha:]]+((-| )[[:alpha:]])*)*)?\z/
  validates :email, presence: true, length: { maximum: 255 }, format: { with: EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :first_name, :last_name, length: { maximum: 255 }, format: { with: NAME_REGEX }
  validates :address, :country, :city, :zip, :phone, length: { maximum: 255 }

  # Returns the full name of the user
  # @return [String]
  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def profile_incomplete?
    needed_profile_information = [:first_name, :last_name, :address, :country, :city, :iban, :bic, :depositor]
    needed_profile_information.any? { |attr| self[attr].blank? }
  end

  def finished_orders
    orders.where.not(status: :in_progress).order(updated_at: :desc)
  end

  def list_projects
    simulations.where(user_id: @current_user.id).order(updated_at: :desc)
  end

end
