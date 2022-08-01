import { DefineComponent } from "vue";

const globalComponents: Record<string, DefineComponent>  = {}

export function registerGlobalComponents(app: any): any{
  Object.entries(globalComponents)
    .forEach(([name, component]) => {
      app.component(name, component)
    })
  return app
}

export function addGlobalComponentToRegistration(name: string, component: DefineComponent) {
  globalComponents[name] = component
}