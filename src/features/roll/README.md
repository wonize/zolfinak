# ROLL

## ORDER

The Order of Rolling, from `TOP` to `BOTTOM`

## USAGE

**1. Define your Component**

```typescript
class MyComponent extends React.Component<Props, State> {
	public render() {
		return (/* JSX stuff */)
	}
}
```

alos you can define `Function Component` by `Arrow Function` or `Function Statement`, be like:

```typescript
function MyComponent(props: Props){
	return (/* JSX stuff */)
}
```

**2. Roll `MyComponent`**

In example, we are use `react-i18next/withTranslation` and `react-router-dom/withRouter` HigherOrder-Components to Rolling Around `MyComponent`. be like:

```typescript
const RolledComponent = new Roller()
  .roll<WithTranslation>(withTranslation('custom-ns'))
  .roll<RouteComponentProps<Params>>(withRouter)
  .around<Props>(MyComponent);
```

**3. Export `RolledComponent`**

```typescript
export default RolledComponent;
```

## UTILITIES

### 1. `withPage`

A HigherOrder-Component to roll the `react-router-dom/route` as `Page` around component.

**Import**

```typescript
import { withPage } from 'roll/utilities/mod';
```

**Usage**

```typescript
.roll(withPage('/path'))
```

**References**

```typescript
path: string
option?:
{
	exact: boolean = true
}
```

### 2. `withIonPageLayout`

A HigherOrder-Component to roll the `@ionic/react` page boilerplate around component.

**Import**

```typescript
import { withIonPageLayout } from 'roll/utilities/mod';
```

**Usage**

```typescript
.roll(withIonPageLayout('page-title'))
```

**References**

```typescript
title: string
option?:
{
	fullscreen: boolean = true;
	contentClassName?: string;
	withToolbar?: boolean;
}
```

### 3. `withContext`

A HigherOrder-Component to Inject the `Context.Provider` to component.

**Import**

```typescript
import { withContext } from 'roll/utilities/mod';
```

**Usage**

```typescript
.roll(withContext(MyContext))
```

**References**

```typescript
Context: React.Context;
```

### 4. `withProvider`

A HigherOrder-Component to Inject `Context.Provider` to component.

**Import**

```typescript
import { withProvider } from 'roll/utilities/mod';
```

**Usage**

```typescript
.roll(withProvider(MyContext.Provider))
// or
.roll(withProvider(MyProvider))
```

**References**

```typescript
Provider: React.Provider;
```

## BOILERPLATES

**Accept Option**

```typescript
import React from 'react';
import type { HighComponent } from '../roll.interface';

export function withName<P extends object>(option: WithNameOption): HighComponent<P> {
  return function HigherOrderComponent(component: React.ComponentType<P>){
    return function EnhancedComponent(props: P): JSX.Element {
      return(/* JSX stuff */)
    }
  }
}

export interface WithNameOption {}

export const DEFAULT_WITH_NAME_OPTION: Readonly<WithNameOption> = {}
```

**UnAccept Option**

```typescript
import React from 'react';

export function withName<P extends object>(component: React.ComponentType<P>) {
  return function EnhancedComponent(props: P): JSX.Element {
    return(/* JSX stuff */)
  };
}
```
