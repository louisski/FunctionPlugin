/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GeoFuncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var GeoFuncPlugin = class extends import_obsidian.Plugin {
  async onload() {
    console.log("loaded");
    await this.loadSettings();
    this.addRibbonIcon("dice", "Open menu", (event) => {
      const menu = new import_obsidian.Menu();
      menu.addItem(
        (item) => item.setTitle("Copy").setIcon("documents").onClick(() => {
          new import_obsidian.Notice("Copied");
        })
      );
      menu.addItem(
        (item) => item.setTitle("Paste").setIcon("paste").onClick(() => {
          new import_obsidian.Notice("Pasted");
        })
      );
      menu.showAtMouseEvent(event);
    });
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "p" }],
      callback: () => {
        new FunctionModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new FunctionModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
    console.log("unloaded");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var FunctionModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Define your function!");
    new import_obsidian.Setting(contentEl).setName("3D").addToggle((field) => field.onChange((value) => {
      this.is3d = value;
    }));
    new import_obsidian.Setting(contentEl).setName("Name").addText((text) => text.onChange((value) => {
      this.name = value;
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTWVudSwgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuXHJcbi8vIFJlbWVtYmVyIHRvIHJlbmFtZSB0aGVzZSBjbGFzc2VzIGFuZCBpbnRlcmZhY2VzIVxyXG5cclxuaW50ZXJmYWNlIE15UGx1Z2luU2V0dGluZ3Mge1xyXG5cdG15U2V0dGluZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNeVBsdWdpblNldHRpbmdzID0ge1xyXG5cdG15U2V0dGluZzogJ2RlZmF1bHQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0Z1bmNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdHNldHRpbmdzOiBNeVBsdWdpblNldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJsb2FkZWRcIik7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuXHJcblxyXG5cdFx0Ly8gVGhpcyBjcmVhdGVzIGFuIGljb24gaW4gdGhlIGxlZnQgcmliYm9uLlxyXG5cdFx0dGhpcy5hZGRSaWJib25JY29uKFwiZGljZVwiLCBcIk9wZW4gbWVudVwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcblx0ICBcclxuXHRcdFx0bWVudS5hZGRJdGVtKChpdGVtKSA9PlxyXG5cdFx0XHQgIGl0ZW1cclxuXHRcdFx0XHQuc2V0VGl0bGUoXCJDb3B5XCIpXHJcblx0XHRcdFx0LnNldEljb24oXCJkb2N1bWVudHNcIilcclxuXHRcdFx0XHQub25DbGljaygoKSA9PiB7XHJcblx0XHRcdFx0ICBuZXcgTm90aWNlKFwiQ29waWVkXCIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0ICBcclxuXHRcdFx0bWVudS5hZGRJdGVtKChpdGVtKSA9PlxyXG5cdFx0XHQgIGl0ZW1cclxuXHRcdFx0XHQuc2V0VGl0bGUoXCJQYXN0ZVwiKVxyXG5cdFx0XHRcdC5zZXRJY29uKFwicGFzdGVcIilcclxuXHRcdFx0XHQub25DbGljaygoKSA9PiB7XHJcblx0XHRcdFx0ICBuZXcgTm90aWNlKFwiUGFzdGVkXCIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0ICBcclxuXHRcdFx0bWVudS5zaG93QXRNb3VzZUV2ZW50KGV2ZW50KTtcclxuXHRcdCAgfSk7XHJcblxyXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc3RhdHVzIGJhciBpdGVtIHRvIHRoZSBib3R0b20gb2YgdGhlIGFwcC4gRG9lcyBub3Qgd29yayBvbiBtb2JpbGUgYXBwcy5cclxuXHRcdGNvbnN0IHN0YXR1c0Jhckl0ZW1FbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xyXG5cdFx0c3RhdHVzQmFySXRlbUVsLnNldFRleHQoJ1N0YXR1cyBCYXIgVGV4dCcpO1xyXG5cclxuXHRcdC8vIFRoaXMgYWRkcyBhIHNpbXBsZSBjb21tYW5kIHRoYXQgY2FuIGJlIHRyaWdnZXJlZCBhbnl3aGVyZVxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1zaW1wbGUnLFxyXG5cdFx0XHRuYW1lOiAnT3BlbiBzYW1wbGUgbW9kYWwgKHNpbXBsZSknLFxyXG5cdFx0XHRob3RrZXlzOiBbe21vZGlmaWVyczogW1wiTW9kXCIsXCJTaGlmdFwiXSwga2V5OiBcInBcIn1dLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdG5ldyBGdW5jdGlvbk1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gVGhpcyBhZGRzIGFuIGVkaXRvciBjb21tYW5kIHRoYXQgY2FuIHBlcmZvcm0gc29tZSBvcGVyYXRpb24gb24gdGhlIGN1cnJlbnQgZWRpdG9yIGluc3RhbmNlXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ3NhbXBsZS1lZGl0b3ItY29tbWFuZCcsXHJcblx0XHRcdG5hbWU6ICdTYW1wbGUgZWRpdG9yIGNvbW1hbmQnLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlZGl0b3IuZ2V0U2VsZWN0aW9uKCkpO1xyXG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCdTYW1wbGUgRWRpdG9yIENvbW1hbmQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyBUaGlzIGFkZHMgYSBjb21wbGV4IGNvbW1hbmQgdGhhdCBjYW4gY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwIGFsbG93cyBleGVjdXRpb24gb2YgdGhlIGNvbW1hbmRcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnb3Blbi1zYW1wbGUtbW9kYWwtY29tcGxleCcsXHJcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoY29tcGxleCknLFxyXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmc6IGJvb2xlYW4pID0+IHtcclxuXHRcdFx0XHQvLyBDb25kaXRpb25zIHRvIGNoZWNrXHJcblx0XHRcdFx0Y29uc3QgbWFya2Rvd25WaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHRcdFx0XHRpZiAobWFya2Rvd25WaWV3KSB7XHJcblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyB0cnVlLCB3ZSdyZSBzaW1wbHkgXCJjaGVja2luZ1wiIGlmIHRoZSBjb21tYW5kIGNhbiBiZSBydW4uXHJcblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyBmYWxzZSwgdGhlbiB3ZSB3YW50IHRvIGFjdHVhbGx5IHBlcmZvcm0gdGhlIG9wZXJhdGlvbi5cclxuXHRcdFx0XHRcdGlmICghY2hlY2tpbmcpIHtcclxuXHRcdFx0XHRcdFx0bmV3IEZ1bmN0aW9uTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBUaGlzIGNvbW1hbmQgd2lsbCBvbmx5IHNob3cgdXAgaW4gQ29tbWFuZCBQYWxldHRlIHdoZW4gdGhlIGNoZWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTYW1wbGVTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcclxuXHRcdC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2snLCBldnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gV2hlbiByZWdpc3RlcmluZyBpbnRlcnZhbHMsIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGNsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWQuXHJcblx0XHR0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKCdzZXRJbnRlcnZhbCcpLCA1ICogNjAgKiAxMDAwKSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5sb2FkZWRcIik7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBGdW5jdGlvbk1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRpczNkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHR9XHJcblxyXG5cdG9uT3BlbigpIHtcclxuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5zZXRUZXh0KCdEZWZpbmUgeW91ciBmdW5jdGlvbiEnKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250ZW50RWwpXHJcblx0XHRcdC5zZXROYW1lKFwiM0RcIilcclxuXHRcdFx0LmFkZFRvZ2dsZSgoZmllbGQpID0+XHJcblx0XHRcdGZpZWxkLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXMzZCA9IHZhbHVlXHJcblx0XHR9KSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGVudEVsKVxyXG5cdFx0XHQuc2V0TmFtZShcIk5hbWVcIilcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+XHJcblx0XHRcdHRleHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5uYW1lID0gdmFsdWVcclxuICAgICAgICB9KSk7XHJcblx0fVxyXG5cclxuXHRvbkNsb3NlKCkge1xyXG5cdFx0Y29uc3Qge2NvbnRlbnRFbH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTYW1wbGVTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBHZW9GdW5jUGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBHZW9GdW5jUGx1Z2luKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnU2V0dGluZyAjMScpXHJcblx0XHRcdC5zZXREZXNjKCdJdFxcJ3MgYSBzZWNyZXQnKVxyXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIHlvdXIgc2VjcmV0JylcclxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlTZXR0aW5nKVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdz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
