Rails.application.routes.draw do
  root 'co_steps#index'
  resources :co_steps 
  resources :works
  resources :missions
end
