Rails.application.routes.draw do
  root 'co_steps#index'
  resources :co_steps 
  resources :works
  resources :missions
  get 'inquiry' => 'inquiry#index'              # 入力画面
  post 'inquiry/confirm' => 'inquiry#confirm'   # 確認画面
  post 'inquiry/thanks' => 'inquiry#thanks'     # 送信完了画面

  get 'inquiry' => 'inquiry#index'              # 入力画面
  post 'inquiry/confirm2' => 'inquiry#confirm2'   # 確認画面
  post 'inquiry/thanks2' => 'inquiry#thanks2'     # 送

end


