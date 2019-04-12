Rails.application.routes.draw do
  root to: 'licenses#index'
  get 'order_items/create'
  get 'order_items/update'
  get 'order_items/destroy'
  get 'carts/show'
  get 'order_confirmations/show'
  post 'order_confirmations/create'
  post 'admin/orders/confirm_account_transaction'

  # new api space
  namespace :api do
    resources :projects, except: :edit
    resources :components, except: :edit
    resources :components_detail, except: :edit
    resources :components_economic_detail, except: :edit
    resources :components_general_parameter, except: :edit
    resources :simulations
    resources :simulation_parser
    resources :loads, except: :edit
    resources :resources, except: :edit
  end

  devise_for :users

  resources :users, only: [:show, :edit, :update]
  resources :licenses, only: [:show, :index]
  resource :carts, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  resource :order_confirmations, only: [:show, :create]
  resources :orders, only: [:index, :show]
  resources :projects, only: [:index, :show, :create]
  resources :components, only: [:index, :show]

  namespace :admin do
    resources :orders, only: [:index, :show]
  end
end
