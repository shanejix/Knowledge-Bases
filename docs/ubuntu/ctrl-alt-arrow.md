# ubuntu 18.04下 VSCode中ctrl+alt+up/down热键冲突解决

```bash
    gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left "['']"
    gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right "['']"
    gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-up "['']"
    gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down "['']"
    # 恢复默认为 reset 
    gsettings reset org.gnome.desktop.wm.keybindings
```