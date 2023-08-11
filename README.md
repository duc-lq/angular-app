# AngularApp

## 1. Create project
npm new angular-app --no-strict


## 2. Bootstrap
### 2.1 Install bootstrap 3 to project
npm install --save bootstrap@3

### 2.2 Add styles in angular.json
Add "node_modules/bootstrap/dist/css/bootstrap.min.css"

## 3. Add new component
ng generate component ...

## 4. Data Binding
### 4.1 String Interpolation and Property Binding
* String Interpolation: {{ data }}
* Property Binding: [property] = "data"
* String Interpolation to Property Binding

### 4.2 Event Binding
* Event Binding: (event) = "expression"
* Passing data with Event Binding: (input) = "onUpdateServerName($event)"

### 4.3 Combination of both: Two-way-Binding
Two-way-binding: [(ngModel)] = "data"
