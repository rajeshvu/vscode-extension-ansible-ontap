# ONTAP Ansible Snippets

**ONTAP Ansible Snippets** is a Visual Studio Code extension that allows you to quickly search and insert NetApp ONTAP Ansible snippets directly into your editor.  
This extension helps you automate NetApp ONTAP management tasks by providing ready-to-use, trusted Ansible playbook examples.

---

## Features

- Supports **NetApp ONTAP Ansible collection version 22.14.0**.
- Search for ONTAP Ansible snippets by keyword or description.
- Insert ONTAP Ansible tasks into your playbooks with a single click.
- Snippets cover common storage operations: provisioning, masking, snapshot, replication, and more.
- **Hover Suggestions**: Hover over a ONTAP module or option name to instantly view detailed documentation, including type, description, and default values. The documentation is formatted for readability and includes color-coded hints.
* **Intelligent Suggestions:**
    * **Module & Option Suggestions:** Get intelligent suggestions for module options and their values as you type.
    * **Task Examples:** Type `ontap:` to filter through all available task examples and insert directly into your editor.
* **Inline Documentation:** Hover over any ONTAP module or option to instantly view detailed documentation. The documentation is formatted for readability and includes color-coded hints, along with details on type, description, and default values.

---

## Installation

1. Open **Visual Studio Code**.  
2. Go to the **Extensions** view (`Ctrl+Shift+X`).  
3. Search for `ONTAP Ansible Snippets`.  
4. Click **Install**.  

---

## Usage

### Using Snippets via the Command Palette

1. Open a YAML or Ansible playbook file in VS Code.  
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).  
3. Type and select: `ONTAP Ansible Snippets - v22.14.0`  
4. Search for a snippet by keyword or description.  
5. Select a snippet to insert it at your cursor location.  

### Using Hover and Autocompletion

-   **Hover**: To view documentation for a module or option, simply move your mouse cursor over its name. A hover popup will appear with a formatted summary.
-   **Autocompletion**: As you type a module option, VS Code will suggest available options. After typing a colon (`:`) and a space, the extension will suggest valid values or templates for that option.

### Demos
 
![PowerMax Ansible Snippets - Demo1](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-ontap/refs/heads/release/22.14.0/src/resources/demo1.gif)

![PowerMax Ansible Snippets - Demo2](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-ontap/refs/heads/release/22.14.0/src/resources/demo2.gif)

![PowerMax Ansible Snippets - Demo3](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-ontap/refs/heads/release/22.14.0/src/resources/demo3.gif)

---

## References

- https://galaxy.ansible.com/ui/repo/published/netapp/ontap
- https://github.com/ansible-collections/netapp.ontap

---

## License

MIT License  

---

## Author

Developed and maintained by [Rajesh V U](https://www.rajeshvu.com)