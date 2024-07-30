import { useAuthStore } from "@/stores/auth.stores";
import { Directive } from "vue";

const permission: Directive = {
    mounted(el: HTMLElement, binding: any) {
      const { value } = binding;
      const authStore = useAuthStore();
      const stringPermissions = authStore.authState.permissions;
  
      const authPermissions: string[] = stringPermissions.split("|");
  
      if (value && Array.isArray(value)) {
        if (value.length > 0) {
          const permissionRoles = value;
          const hasPermission = authPermissions.some((role) =>
            permissionRoles.includes(role)
          );
  
          if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el);
          }
        }
      } else {
        throw new Error(
          `El valor de la directiva 'v-permission' debería ser un Array! Por ejemplo: v-permission="['admin', 'editor']"`
        );
      }
    }
  };
  
  export default permission;