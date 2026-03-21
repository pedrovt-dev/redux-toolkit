import React from "react";

export function createAdapter<
  ComponentProps extends object,                         // Props que expondrá TU componente
  AntDProps extends object                          // Props que espera el componente de AntD
>(
  AntComponent: React.ComponentType<AntDProps>,     // ← Aquí tipamos AntComponent
  mapProps: (props: ComponentProps) => AntDProps = (p) => p as unknown as AntDProps
) {
  const Adapter: React.FC<ComponentProps> = (props) => {
    return <AntComponent {...mapProps(props)} />;
  };

  Adapter.displayName = `Adapter(${AntComponent.displayName || AntComponent.name || "Component"
    })`;

  return Adapter;
}