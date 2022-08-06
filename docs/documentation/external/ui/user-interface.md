---
id: user-interface
title: UI
sidebar_label: Component
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This is a general component for the user interface.

# Methods
------
## __Server__

### Balance (*Prefix*: Balance)

#### `UpdateCash`
- __Parameters__: <span style={{color: '#cecece'}}>`cash: number`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update UI cash</span>

## __Client__

#### `SendUIMessage`
- __Parameters__: <span style={{color: '#cecece'}}>`action: string, data: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends a UI message</span>

#### `SetFocus`
- __Parameters__: <span style={{color: '#cecece'}}>`shouldFocus: boolean`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Set the UI focus whether or not should focus</span>

### Hud (*Prefix*: Hud)

#### `Show`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Show the hud</span>

#### `Hide`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Hide the hud</span>

#### `Update`
- __Parameters__: <span style={{color: '#cecece'}}>`data: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update the hud status</span>

#### `Reset`
- __Parameters__: <span style={{color: '#cecece'}}>`shouldFocus: boolean`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Reset the hud status</span>

### Vehicle (*Prefix*: Vehicle)

#### `Show`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Show the vehicle hud</span>

#### `Hide`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Hide the vehicle hud</span>

#### `Update`
- __Parameters__: <span style={{color: '#cecece'}}>`data: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update the vehicle hud status</span>

### Balance (*Prefix*: Balance)

#### `ShowBank`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Show bank cash</span>

#### `ShowCash`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Show cash</span>

#### `UpdateCash`
- __Parameters__: <span style={{color: '#cecece'}}>`cash: number`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update cash</span>

#### `UpdateBank`
- __Parameters__: <span style={{color: '#cecece'}}>`cash: number`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update bank cash</span>

### Voip (*Prefix*: Voip)

#### `ToggleTalking`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Toggle talking in the hud</span>

#### `ToggleRadio`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Toggle radio in the hud</span>

### Action (*Prefix*: Action)

#### `Show`
- __Parameters__: <span style={{color: '#cecece'}}>`actionText: string, color: "success" | "error" | "default"`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Show action</span>

#### `Hide`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Hide action</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.