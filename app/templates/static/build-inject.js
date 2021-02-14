var app
const getApp = () =>
  app || (app = JSON.parse(document.getElementById('_app').text))

export const process = {
  cwd: () => '',
  env: { NODE_ENV: getApp().NODE_ENV },
}
