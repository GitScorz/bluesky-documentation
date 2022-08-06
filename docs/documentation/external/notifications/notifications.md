---
id: notifications-component
title: Notification Component
sidebar_label: Notification
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>No</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This component allows displaying toast messages to the client

## Required Attributes
------
### __Server__
* `None`

### __Client__
* `None`

## Methods
------
### __Server__
This component has no server methods.

### __Client__

#### `Clear`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Clear all notifications</span>

#### `SendAlert`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration?: number`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a information notification for the provided duration</span>

#### `SendError`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration?: number`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a error notification for the provided duration</span>

#### `Custom`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration?: number, style: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a notification with custom styling, provided table should be using the key as the CSS tag and the value as the CSS value.</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.