import { SnippetItem } from "./snippets";

export const snippets_23_2_0: SnippetItem[] = [
    {
        "label": "Create active directory account.",
        "description": "- netapp.ontap.na_ontap_active_directory",
        "body": "- name: Create active directory account.\n  netapp.ontap.na_ontap_active_directory:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: laurentncluster-1\n    state: present\n    account_name: carchi\n    admin_password: password\n    admin_username: carchi\n    domain: addomain.com\n"
    },
    {
        "label": "Modify domain name.",
        "description": "- netapp.ontap.na_ontap_active_directory",
        "body": "- name: Modify domain name.\n  netapp.ontap.na_ontap_active_directory:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: laurentncluster-1\n    state: present\n    account_name: carchi\n    admin_password: password\n    admin_username: carchi\n    domain: addomain_new.com\n    force_account_overwrite: true\n"
    },
    {
        "label": "Delete active directory account.",
        "description": "- netapp.ontap.na_ontap_active_directory",
        "body": "- name: Delete active directory account.\n  netapp.ontap.na_ontap_active_directory:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: laurentncluster-1\n    state: absent\n    account_name: carchi\n    admin_password: password\n    admin_username: carchi\n    domain: addomain.com\n"
    },
    {
        "label": "Create active directory preferred domain controllers",
        "description": "- netapp.ontap.na_ontap_active_directory_domain_controllers",
        "body": "- name: Create active directory preferred domain controllers\n  netapp.ontap.na_ontap_active_directory_domain_controllers:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: ansible\n    state: present\n    fqdn: test.com\n    server_ip: 10.10.10.10\n"
    },
    {
        "label": "Delete active directory preferred domain controllers",
        "description": "- netapp.ontap.na_ontap_active_directory_domain_controllers",
        "body": "- name: Delete active directory preferred domain controllers\n  netapp.ontap.na_ontap_active_directory_domain_controllers:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: ansible\n    state: absent\n    fqdn: test.com\n    server_ip: 10.10.10.10\n"
    },
    {
        "label": "Create Aggregates and wait 5 minutes until aggregate is online in ZAPI.",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Create Aggregates and wait 5 minutes until aggregate is online in ZAPI.\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    service_state: online\n    name: ansibleAggr\n    disk_count: 10\n    wait_for_online: true\n    time_out: 300\n    snaplock_type: non_snaplock\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Aggregates in REST.",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Create Aggregates in REST.\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    service_state: online\n    name: ansibleAggr\n    disk_count: 10\n    nodes: ontap-node\n    snaplock_type: non_snaplock\n    use_rest: always\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Manage Aggregates in ZAPI, modify service state.",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Manage Aggregates in ZAPI, modify service state.\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    service_state: offline\n    unmount_volumes: true\n    name: ansibleAggr\n    disk_count: 10\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Manage Aggregates in REST, increase disk count.",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Manage Aggregates in REST, increase disk count.\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    name: ansibleAggr\n    disk_count: 20\n    nodes: ontap-node\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Attach object store",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Attach object store\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    name: aggr4\n    object_store_name: sgws_305\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename Aggregates",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Rename Aggregates\n  netapp.ontap.na_ontap_aggregate:\n    state: present\n    service_state: online\n    from_name: ansibleAggr\n    name: ansibleAggr2\n    disk_count: 20\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Aggregates",
        "description": "- netapp.ontap.na_ontap_aggregate",
        "body": "- name: Delete Aggregates\n  netapp.ontap.na_ontap_aggregate:\n    state: absent\n    service_state: offline\n    unmount_volumes: true\n    name: ansibleAggr\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable autosupport - ZAPI",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Enable autosupport - ZAPI\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    node_name: test\n    transport: https\n    noteto: abc@def.com,def@ghi.com\n    mail_hosts: 1.2.3.4,5.6.7.8\n    support: false\n    post_url: url/1.0/post\n"
    },
    {
        "label": "Modify autosupport proxy_url with password - ZAPI",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Modify autosupport proxy_url with password - ZAPI\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    node_name: test\n    transport: https\n    proxy_url: username:password@host.com:8000\n"
    },
    {
        "label": "Modify autosupport proxy_url without password - ZAPI",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Modify autosupport proxy_url without password - ZAPI\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    node_name: test\n    transport: https\n    proxy_url: username@host.com:8000\n"
    },
    {
        "label": "Disable autosupport - ZAPI",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Disable autosupport - ZAPI\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: absent\n    node_name: test\n"
    },
    {
        "label": "Enable autosupport - REST",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Enable autosupport - REST\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    transport: https\n    mail_hosts: 1.2.3.4,5.6.7.8\n    proxy_url: proxyhost.local.com\n    to_addresses: rst@xyz.com\n    from_address: testmail1@abc.com\n    ondemand_enabled: true\n    support: true\n    state: present\n    force: true\n    is_minimal: true\n    smtp_encryption: none\n    partner_addresses: test2@xyz.com\n"
    },
    {
        "label": "Modify autosupport - REST",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Modify autosupport - REST\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    transport: smtp\n    mail_hosts: 1.2.3.4:25\n    proxy_url: proxyhost.local.com\n    to_addresses: rst@xyz.com,mymail@abc.com\n    from_address: testmail@abc.com\n    ondemand_enabled: false\n    support: false\n    state: present\n    is_minimal: false\n    smtp_encryption: start_tls\n    partner_addresses: test1@xyz.com\n    force: true\n"
    },
    {
        "label": "Disable autosupport - REST",
        "description": "- netapp.ontap.na_ontap_autosupport",
        "body": "- name: Disable autosupport - REST\n  netapp.ontap.na_ontap_autosupport:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: absent\n"
    },
    {
        "label": "Send message",
        "description": "- netapp.ontap.na_ontap_autosupport_invoke",
        "body": "- name: Send message\n  netapp.ontap.na_ontap_autosupport_invoke:\n    name: node1\n    autosupport_message: invoked test autosupport rest\n    uri: http://1.2.3.4/delivery_uri\n    type: test\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify status to enable automatic update",
        "description": "- netapp.ontap.na_ontap_autoupdate_support",
        "body": "- name: Modify status to enable automatic update\n  netapp.ontap.na_ontap_autoupdate_support:\n    enabled: true\n    force: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create BGP configuration for a node",
        "description": "- netapp.ontap.na_ontap_bgp_config",
        "body": "- name: Create BGP configuration for a node\n  netapp.ontap.na_ontap_bgp_config:\n    state: present\n    node: csahu-node1\n    asn: 10\n    hold_time: 180\n    router_id: 10.0.1.112\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Modify BGP configuration for a node",
        "description": "- netapp.ontap.na_ontap_bgp_config",
        "body": "- name: Modify BGP configuration for a node\n  netapp.ontap.na_ontap_bgp_config:\n    state: present\n    node: csahu-node1\n    hold_time: 360\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Delete BGP configuration for a node",
        "description": "- netapp.ontap.na_ontap_bgp_config",
        "body": "- name: Delete BGP configuration for a node\n  netapp.ontap.na_ontap_bgp_config:\n    state: absent\n    node: csahu-node1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Create BGP peer group with existing bgp interface bgp_lif.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Create BGP peer group with existing bgp interface bgp_lif.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    name: peer_group\n    ipspace: Default\n    local:\n      interface:\n        name: bgp_lif\n    peer:\n      address: 10.10.10.19\n      asn: 65501\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create new BGP interface new_bgp_lif and BGP peer group peer_group_1.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Create new BGP interface new_bgp_lif and BGP peer group peer_group_1.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    name: peer_group_1\n    ipspace: Default\n    local:\n      interface:\n        name: new_bgp_lif\n      ip:\n        address: 10.10.10.20\n        netmask: 24\n      port:\n        name: e0a\n        node:\n          name: ontap98-01\n    peer:\n      address: 10.10.10.20\n      asn: 65500\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create BGP interface without interface name and BGP peer group peer_group_2.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Create BGP interface without interface name and BGP peer group peer_group_2.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    name: peer_group_2\n    ipspace: Default\n    local:\n      ip:\n        address: 10.10.10.22\n        netmask: 24\n      port:\n        name: e0a\n        node:\n          name: ontap98-01\n    peer:\n      address: 10.10.10.22\n      asn: 65512\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify peer address.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Modify peer address.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    name: peer_group_2\n    ipspace: Default\n    peer:\n      address: 10.10.55.22\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Rename BGP peer group name and modify peer address.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Rename BGP peer group name and modify peer address.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    from_name: peer_group_2\n    name: new_peer_group\n    ipspace: Default\n    peer:\n      address: 10.10.55.40\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Delete BGP peer group.",
        "description": "- netapp.ontap.na_ontap_bgp_peer_group",
        "body": "- name: Delete BGP peer group.\n  netapp.ontap.na_ontap_bgp_peer_group:\n    name: new_peer_group\n    ipspace: Default\n    state: absent\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create broadcast domain",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Create broadcast domain\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: ansible_domain\n    mtu: 1000\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-12\n    - khutton-vsim1:e0d-13\n"
    },
    {
        "label": "Modify broadcast domain",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Modify broadcast domain\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: ansible_domain\n    mtu: 1100\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-12\n    - khutton-vsim1:e0d-13\n"
    },
    {
        "label": "Split broadcast domain",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Split broadcast domain\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_name: ansible_domain\n    name: new_ansible_domain\n    mtu: 1200\n    ipspace: Default\n    ports: khutton-vsim1:e0d-12\n"
    },
    {
        "label": "Delete broadcast domain",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Delete broadcast domain\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: ansible_domain\n    ipspace: Default\n"
    },
    {
        "label": "Create broadcast domain REST",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Create broadcast domain REST\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: ansible_domain\n    mtu: 1200\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-12\n    - khutton-vsim1:e0d-13\n    - khutton-vsim1:e0d-14\n"
    },
    {
        "label": "Rename broadcast domain if exact match of ports REST",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Rename broadcast domain if exact match of ports REST\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_name: ansible_domain\n    name: new_ansible_domain\n    mtu: 1200\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-12\n    - khutton-vsim1:e0d-13\n    - khutton-vsim1:e0d-14\n"
    },
    {
        "label": "If partial match, remove e0d-12 from new_ansible_domain & create new domain ansible_domain with port e0d-12 REST",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: If partial match, remove e0d-12 from new_ansible_domain & create new domain\n    ansible_domain with port e0d-12 REST\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_name: new_ansible_domain\n    name: ansible_domain\n    mtu: 1200\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-12\n"
    },
    {
        "label": "Modify both broadcast domain and ipspace REST.",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Modify both broadcast domain and ipspace REST.\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_name: ansible_domain\n    from_ipspace: Default\n    name: ansible_domain_ip1\n    ipspace: ipspace_1\n    mtu: 1200\n    ports:\n    - khutton-vsim1:e0d-12\n"
    },
    {
        "label": "Modify ipspace only REST.",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Modify ipspace only REST.\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_ipspace: ipspace_1\n    name: ansible_domain_ip1\n    ipspace: Default\n    mtu: 1200\n    ports:\n    - khutton-vsim1:e0d-12\n"
    },
    {
        "label": "Delete broadcast domain new_ansible_domain.",
        "description": "- netapp.ontap.na_ontap_broadcast_domain",
        "body": "- name: Delete broadcast domain new_ansible_domain.\n  netapp.ontap.na_ontap_broadcast_domain:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: new_ansible_domain\n    mtu: 1200\n    ipspace: Default\n    ports:\n    - khutton-vsim1:e0d-13\n    - khutton-vsim1:e0d-14\n"
    },
    {
        "label": "Create broadcast-domain ports",
        "description": "- netapp.ontap.na_ontap_broadcast_domain_ports",
        "body": "- name: Create broadcast-domain ports\n  netapp.ontap.na_ontap_broadcast_domain_ports:\n    state: present\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    broadcast_domain: 123kevin\n    ports: khutton-vsim1:e0d-13\n"
    },
    {
        "label": "Delete broadcast-domain ports",
        "description": "- netapp.ontap.na_ontap_broadcast_domain_ports",
        "body": "- name: Delete broadcast-domain ports\n  netapp.ontap.na_ontap_broadcast_domain_ports:\n    state: absent\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    broadcast_domain: 123kevin\n    ports: khutton-vsim1:e0d-13\n"
    },
    {
        "label": "Create CIFS share - ZAPI",
        "description": "- netapp.ontap.na_ontap_cifs",
        "body": "- name: Create CIFS share - ZAPI\n  netapp.ontap.na_ontap_cifs:\n    state: present\n    name: cifsShareName\n    path: /\n    vserver: vserverName\n    share_properties: browsable,oplocks\n    symlink_properties: read_only,enable\n    comment: CIFS share description\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete CIFS share - ZAPI",
        "description": "- netapp.ontap.na_ontap_cifs",
        "body": "- name: Delete CIFS share - ZAPI\n  netapp.ontap.na_ontap_cifs:\n    state: absent\n    name: cifsShareName\n    vserver: vserverName\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify path CIFS share - ZAPI",
        "description": "- netapp.ontap.na_ontap_cifs",
        "body": "- name: Modify path CIFS share - ZAPI\n  netapp.ontap.na_ontap_cifs:\n    state: present\n    name: pb_test\n    vserver: vserverName\n    path: /\n    share_properties: show_previous_versions\n    symlink_properties: disable\n    vscan_fileop_profile: no_scan\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create CIFS share - REST",
        "description": "- netapp.ontap.na_ontap_cifs",
        "body": "- name: Create CIFS share - REST\n  netapp.ontap.na_ontap_cifs:\n    state: present\n    name: cifsShareName\n    path: /\n    vserver: vserverName\n    oplocks: true\n    change_notify: true\n    unix_symlink: disable\n    comment: CIFS share description\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify CIFS share - REST",
        "description": "- netapp.ontap.na_ontap_cifs",
        "body": "- name: Modify CIFS share - REST\n  netapp.ontap.na_ontap_cifs:\n    state: present\n    name: cifsShareName\n    path: /\n    vserver: vserverName\n    oplocks: true\n    change_notify: true\n    unix_symlink: local\n    comment: CIFS share description\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create CIFS share ACL",
        "description": "- netapp.ontap.na_ontap_cifs_acl",
        "body": "- name: Create CIFS share ACL\n  netapp.ontap.na_ontap_cifs_acl:\n    state: present\n    share_name: cifsShareName\n    user_or_group: Everyone\n    permission: read\n    vserver: '{{ netapp_vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify CIFS share ACL permission",
        "description": "- netapp.ontap.na_ontap_cifs_acl",
        "body": "- name: Modify CIFS share ACL permission\n  netapp.ontap.na_ontap_cifs_acl:\n    state: present\n    share_name: cifsShareName\n    user_or_group: Everyone\n    permission: change\n    vserver: '{{ netapp_vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete CIFS share ACL",
        "description": "- netapp.ontap.na_ontap_cifs_acl",
        "body": "- name: Delete CIFS share ACL\n  netapp.ontap.na_ontap_cifs_acl:\n    state: absent\n    share_name: cifsShareName\n    user_or_group: localUser\n    permission: read\n    vserver: '{{ netapp_vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create CIFS local group",
        "description": "- netapp.ontap.na_ontap_cifs_local_group",
        "body": "- name: Create CIFS local group\n  netapp.ontap.na_ontap_cifs_local_group:\n    state: present\n    vserver: svm1\n    name: BUILTIN\\\\administrators\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Delete CIFS local group",
        "description": "- netapp.ontap.na_ontap_cifs_local_group",
        "body": "- name: Delete CIFS local group\n  netapp.ontap.na_ontap_cifs_local_group:\n    state: absent\n    vserver: svm1\n    name: BUILTIN\\\\administrators\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify CIFS local group description",
        "description": "- netapp.ontap.na_ontap_cifs_local_group",
        "body": "- name: Modify CIFS local group description\n  netapp.ontap.na_ontap_cifs_local_group:\n    state: present\n    vserver: svm1\n    name: BUILTIN\\\\administrators\n    descrition: CIFS local group\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Rename CIFS local group description",
        "description": "- netapp.ontap.na_ontap_cifs_local_group",
        "body": "- name: Rename CIFS local group description\n  netapp.ontap.na_ontap_cifs_local_group:\n    state: present\n    vserver: svm1\n    name: ANSIBLE_CIFS\\\\test_users\n    descrition: CIFS local group\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Add member to CIFS local group",
        "description": "- netapp.ontap.na_ontap_cifs_local_group_member",
        "body": "- name: Add member to CIFS local group\n  netapp.ontap.na_ontap_cifs_local_group_member:\n    state: present\n    vserver: svm1\n    group: BUILTIN\\\\administrators\n    member: DOMAIN\\\\Domain Admins\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    ontapi: '{{ ontap_facts.ontap_version }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Remove member from CIFS local group",
        "description": "- netapp.ontap.na_ontap_cifs_local_group_member",
        "body": "- name: Remove member from CIFS local group\n  netapp.ontap.na_ontap_cifs_local_group_member:\n    state: absent\n    vserver: svm1\n    group: BUILTIN\\\\administrators\n    member: DOMAIN\\\\Domain Admins\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    ontapi: '{{ ontap_facts.ontap_version }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create local cifs user",
        "description": "- netapp.ontap.na_ontap_cifs_local_user",
        "body": "- name: Create local cifs user\n  netapp.ontap.na_ontap_cifs_local_user:\n    state: present\n    vserver: ansibleSVM_cifs\n    name: carchi-cifs2\n    user_password: mypassword\n    account_disabled: false\n    full_name: Chris Archibald\n    description: A user account for Chris\n"
    },
    {
        "label": "Modify local cifs user",
        "description": "- netapp.ontap.na_ontap_cifs_local_user",
        "body": "- name: Modify local cifs user\n  netapp.ontap.na_ontap_cifs_local_user:\n    state: present\n    vserver: ansibleSVM_cifs\n    name: carchi-cifs2\n    account_disabled: false\n    full_name: Christopher Archibald\n    description: A user account for Chris Archibald\n"
    },
    {
        "label": "Change local cifs user password",
        "description": "- netapp.ontap.na_ontap_cifs_local_user",
        "body": "- name: Change local cifs user password\n  netapp.ontap.na_ontap_cifs_local_user:\n    state: present\n    vserver: ansibleSVM_cifs\n    name: carchi-cifs2\n    user_password: mypassword2\n    set_password: true\n    account_disabled: false\n    full_name: Christopher Archibald\n    description: A user account for Chris Archibald\n"
    },
    {
        "label": "Delete local cifs user",
        "description": "- netapp.ontap.na_ontap_cifs_local_user",
        "body": "- name: Delete local cifs user\n  netapp.ontap.na_ontap_cifs_local_user:\n    state: absent\n    vserver: ansibleSVM_cifs\n    name: carchi-cifs2\n"
    },
    {
        "label": "Set local CIFS pasword for BUILTIN Administrator account",
        "description": "- netapp.ontap.na_ontap_cifs_local_user_set_password",
        "body": "- name: Set local CIFS pasword for BUILTIN Administrator account\n  netapp.ontap.na_ontap_cifs_local_user_set_password:\n    user_name: Administrator\n    user_password: Test123!\n    vserver: ansible\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Add privileges to the specified local user",
        "description": "- netapp.ontap.na_ontap_cifs_privileges",
        "body": "- name: Add privileges to the specified local user\n  netapp.ontap.na_ontap_cifs_privileges:\n    state: present\n    vserver: ansibleSVM\n    name: CIFS\\\\local_user1\n    privileges:\n    - SeTcbPrivilege\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Update privileges of the specified local user",
        "description": "- netapp.ontap.na_ontap_cifs_privileges",
        "body": "- name: Update privileges of the specified local user\n  netapp.ontap.na_ontap_cifs_privileges:\n    state: present\n    vserver: ansibleSVM\n    name: CIFS\\\\local_user1\n    privileges:\n    - SeTcbPrivilege\n    - SeBackupPrivilege\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Reset privileges of the specified local user",
        "description": "- netapp.ontap.na_ontap_cifs_privileges",
        "body": "- name: Reset privileges of the specified local user\n  netapp.ontap.na_ontap_cifs_privileges:\n    state: absent\n    vserver: ansibleSVM\n    name: CIFS\\\\local_user1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Create cifs_server",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Create cifs_server\n  netapp.ontap.na_ontap_cifs_server:\n    state: present\n    name: data2\n    vserver: svm1\n    service_state: stopped\n    domain: '{{ id_domain }}'\n    admin_user_name: '{{ domain_login }}'\n    admin_password: '{{ domain_pwd }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete cifs_server",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Delete cifs_server\n  netapp.ontap.na_ontap_cifs_server:\n    state: absent\n    name: data2\n    vserver: svm1\n    admin_user_name: '{{ domain_login }}'\n    admin_password: '{{ domain_pwd }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Start cifs_server",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Start cifs_server\n  netapp.ontap.na_ontap_cifs_server:\n    state: present\n    name: data2\n    vserver: svm1\n    service_state: started\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Stop cifs_server",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Stop cifs_server\n  netapp.ontap.na_ontap_cifs_server:\n    state: present\n    name: data2\n    vserver: svm1\n    service_state: stopped\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename cifs_server - REST",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Rename cifs_server - REST\n  netapp.ontap.na_ontap_cifs_server:\n    state: present\n    from_name: data2\n    name: cifs\n    vserver: svm1\n    force: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify cifs_server security - REST",
        "description": "- netapp.ontap.na_ontap_cifs_server",
        "body": "- name: Modify cifs_server security - REST\n  netapp.ontap.na_ontap_cifs_server:\n    state: present\n    name: data2\n    vserver: svm1\n    service_state: stopped\n    encrypt_dc_connection: true\n    smb_encryption: true\n    kdc_encryption: true\n    smb_signing: true\n    aes_netlogon_enabled: true\n    ldap_referral_enabled: true\n    session_security: seal\n    try_ldap_channel_binding: false\n    use_ldaps: true\n    use_start_tls: true\n    restrict_anonymous: no_access\n    domain: '{{ id_domain }}'\n    admin_user_name: '{{ domain_login }}'\n    admin_password: '{{ domain_pwd }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create a UNIX symlink mapping for CIFS share",
        "description": "- netapp.ontap.na_ontap_cifs_unix_symlink_mapping",
        "body": "- name: Create a UNIX symlink mapping for CIFS share\n  netapp.ontap.na_ontap_cifs_unix_symlink_mapping:\n    state: present\n    vserver: '{{ svm }}'\n    unix_path: /example1/\n    share_name: share1\n    cifs_path: /path1/test_dir/\n    cifs_server: CIFS\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Update a specific UNIX symlink mapping for a SVM",
        "description": "- netapp.ontap.na_ontap_cifs_unix_symlink_mapping",
        "body": "- name: Update a specific UNIX symlink mapping for a SVM\n  netapp.ontap.na_ontap_cifs_unix_symlink_mapping:\n    state: present\n    vserver: '{{ svm }}'\n    unix_path: /example1/\n    share_name: share2\n    cifs_path: /path2/test_dir/\n    cifs_server: CIFS\n    locality: widelink\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Remove a specific UNIX symlink mapping for a SVM",
        "description": "- netapp.ontap.na_ontap_cifs_unix_symlink_mapping",
        "body": "- name: Remove a specific UNIX symlink mapping for a SVM\n  netapp.ontap.na_ontap_cifs_unix_symlink_mapping:\n    state: absent\n    vserver: '{{ svm }}'\n    unix_path: /example1/\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify the timeout value for CLI sessions to be 15 minutes",
        "description": "- netapp.ontap.na_ontap_cli_timeout",
        "body": "- name: Modify the timeout value for CLI sessions to be 15 minutes\n  netapp.ontap.na_ontap_cli_timeout:\n    state: present\n    timeout: 15\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Prevent CLI sessions from timing out",
        "description": "- netapp.ontap.na_ontap_cli_timeout",
        "body": "- name: Prevent CLI sessions from timing out\n  netapp.ontap.na_ontap_cli_timeout:\n    state: present\n    timeout: 0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create cluster",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Create cluster\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_name: new_cluster\n    time_out: 0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add node to cluster (Join cluster)",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Add node to cluster (Join cluster)\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_ip_address: 10.10.10.10\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add node to cluster (Join cluster)",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Add node to cluster (Join cluster)\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_ip_address: 10.10.10.10\n    node_name: my_preferred_node_name\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create a 2 node cluster in one call",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Create a 2 node cluster in one call\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_name: new_cluster\n    cluster_ip_address: 10.10.10.10\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Remove node from cluster",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Remove node from cluster\n  netapp.ontap.na_ontap_cluster:\n    state: absent\n    cluster_ip_address: 10.10.10.10\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Remove node from cluster",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Remove node from cluster\n  netapp.ontap.na_ontap_cluster:\n    state: absent\n    node_name: node002\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify cluster",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Modify cluster\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_contact: testing\n    cluster_location: testing\n    cluster_name: '{{ netapp_cluster}}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Updating the cluster-wide web services configuration",
        "description": "- netapp.ontap.na_ontap_cluster",
        "body": "- name: Updating the cluster-wide web services configuration\n  netapp.ontap.na_ontap_cluster:\n    state: present\n    cluster_contact: testing\n    cluster_location: testing\n    certificate:\n      uuid: 7f2f332c-933e-11ee-ab1c-005056b397ff\n    cluster_name: '{{ netapp_cluster}}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable HA status for cluster",
        "description": "- netapp.ontap.na_ontap_cluster_ha",
        "body": "- name: Enable HA status for cluster\n  netapp.ontap.na_ontap_cluster_ha:\n    state: present\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create cluster peer",
        "description": "- netapp.ontap.na_ontap_cluster_peer",
        "body": "- name: Create cluster peer\n  netapp.ontap.na_ontap_cluster_peer:\n    state: present\n    source_intercluster_lifs: 1.2.3.4,1.2.3.5\n    dest_intercluster_lifs: 1.2.3.6,1.2.3.7\n    passphrase: XXXX\n    local_name_for_peer: dest_local_name\n    local_name_for_source: sorce_local_name\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ dest_netapp_hostname }}'\n    encryption_protocol_proposed: tls_psk\n"
    },
    {
        "label": "Delete cluster peer",
        "description": "- netapp.ontap.na_ontap_cluster_peer",
        "body": "- name: Delete cluster peer\n  netapp.ontap.na_ontap_cluster_peer:\n    state: absent\n    source_cluster_name: test-source-cluster\n    dest_cluster_name: test-dest-cluster\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ dest_netapp_hostname }}'\n"
    },
    {
        "label": "Create cluster peer - different credentials",
        "description": "- netapp.ontap.na_ontap_cluster_peer",
        "body": "- name: Create cluster peer - different credentials\n  netapp.ontap.na_ontap_cluster_peer:\n    state: present\n    source_intercluster_lifs: 1.2.3.4,1.2.3.5\n    dest_intercluster_lifs: 1.2.3.6,1.2.3.7\n    passphrase: XXXX\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ dest_netapp_hostname }}'\n      cert_filepath: '{{ cert_filepath }}'\n      key_filepath: '{{ key_filepath }}'\n    encryption_protocol_proposed: tls_psk\n"
    },
    {
        "label": "Modify cluster peer - destination intercluster addresses",
        "description": "- netapp.ontap.na_ontap_cluster_peer",
        "body": "- name: Modify cluster peer - destination intercluster addresses\n  netapp.ontap.na_ontap_cluster_peer:\n    state: present\n    source_intercluster_lifs: 1.2.3.4,1.2.3.5\n    dest_intercluster_lifs: 1.2.3.8\n    dest_cluster_name: test-dest-cluster\n    local_name_for_peer: dest_name\n    local_name_for_source: source_name\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ dest_netapp_hostname }}'\n"
    },
    {
        "label": "Run ONTAP CLI command",
        "description": "- netapp.ontap.na_ontap_command",
        "body": "- name: Run ONTAP CLI command\n  netapp.ontap.na_ontap_command:\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    command:\n    - version\n"
    },
    {
        "label": "Run ONTAP CLI command",
        "description": "- netapp.ontap.na_ontap_command",
        "body": "- name: Run ONTAP CLI command\n  netapp.ontap.na_ontap_command:\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    command:\n    - node\n    - show\n    - -fields\n    - node,health,uptime,model\n    privilege: admin\n    return_dict: true\n"
    },
    {
        "label": "Run ONTAP CLI command",
        "description": "- netapp.ontap.na_ontap_command",
        "body": "- name: Run ONTAP CLI command\n  netapp.ontap.na_ontap_command:\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    command:\n    - node\n    - show\n    - -fields\n    - node,health,uptime,model\n    exclude_lines: 'ode '\n    privilege: admin\n    return_dict: true\n"
    },
    {
        "label": "Check import netapp-lib",
        "description": "- netapp.ontap.na_ontap_debug",
        "body": "- name: Check import netapp-lib\n  netapp.ontap.na_ontap_debug:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Assign specified total disks to node",
        "description": "- netapp.ontap.na_ontap_disks",
        "body": "- name: Assign specified total disks to node\n  netapp.ontap.na_ontap_disks:\n    node: node1\n    disk_count: 56\n    disk_type: VMDISK\n    min_spares: 2\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Assign all unassigned disks to node1",
        "description": "- netapp.ontap.na_ontap_disks",
        "body": "- name: Assign all unassigned disks to node1\n  netapp.ontap.na_ontap_disks:\n    node: node1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Enable Disk Auto Assign",
        "description": "- netapp.ontap.na_ontap_disk_options",
        "body": "- name: Enable Disk Auto Assign\n  netapp.ontap.na_ontap_disk_options:\n    node: node1\n    autoassign: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Disable Disk Auto Assign",
        "description": "- netapp.ontap.na_ontap_disk_options",
        "body": "- name: Disable Disk Auto Assign\n  netapp.ontap.na_ontap_disk_options:\n    node: node1\n    autoassign: false\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create or modify DNS",
        "description": "- netapp.ontap.na_ontap_dns",
        "body": "- name: Create or modify DNS\n  netapp.ontap.na_ontap_dns:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: '{{ vservername }}'\n    domains: sales.bar.com\n    nameservers: 10.193.0.250,10.192.0.250\n    skip_validation: true\n"
    },
    {
        "label": "Create or modify cluster DNS with REST",
        "description": "- netapp.ontap.na_ontap_dns",
        "body": "- name: Create or modify cluster DNS with REST\n  netapp.ontap.na_ontap_dns:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    domains: sales.bar.com\n    nameservers: 10.193.0.250,10.192.0.250\n"
    },
    {
        "label": "Create Domain Tunnel",
        "description": "- netapp.ontap.na_ontap_domain_tunnel",
        "body": "- name: Create Domain Tunnel\n  netapp.ontap.na_ontap_domain_tunnel:\n    state: present\n    vserver: svm1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create threshold efficiency policy",
        "description": "- netapp.ontap.na_ontap_efficiency_policy",
        "body": "- name: Create threshold efficiency policy\n  netapp.ontap.na_ontap_efficiency_policy:\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: ansible\n    state: present\n    policy_name: test\n    comment: This policy is for x and y\n    enabled: true\n    policy_type: threshold\n    qos_policy: background\n    changelog_threshold_percent: 20\n"
    },
    {
        "label": "Create Scheduled efficiency Policy",
        "description": "- netapp.ontap.na_ontap_efficiency_policy",
        "body": "- name: Create Scheduled efficiency Policy\n  netapp.ontap.na_ontap_efficiency_policy:\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: ansible\n    state: present\n    policy_name: test2\n    comment: This policy is for x and y\n    enabled: true\n    schedule: new_job_schedule\n    duration: 1\n    policy_type: scheduled\n    qos_policy: background\n"
    },
    {
        "label": "Modify EMS mail config",
        "description": "- netapp.ontap.na_ontap_ems_config",
        "body": "- name: Modify EMS mail config\n  netapp.ontap.na_ontap_ems_config:\n    state: present\n    mail_from: administrator@mycompany.com\n    mail_server: mail.mycompany.com\n    pubsub_enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify EMS proxy config",
        "description": "- netapp.ontap.na_ontap_ems_config",
        "body": "- name: Modify EMS proxy config\n  netapp.ontap.na_ontap_ems_config:\n    state: present\n    proxy_url: http://proxy.example.com:8080\n    pubsub_enabled: true\n    proxy_user: admin\n    proxy_password: password\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Configure REST EMS destination",
        "description": "- netapp.ontap.na_ontap_ems_destination",
        "body": "- name: Configure REST EMS destination\n  netapp.ontap.na_ontap_ems_destination:\n    state: present\n    name: rest\n    type: rest_api\n    filters:\n    - important_events\n    destination: http://my.rest.api/address\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Configure REST EMS destination with a certificate",
        "description": "- netapp.ontap.na_ontap_ems_destination",
        "body": "- name: Configure REST EMS destination with a certificate\n  netapp.ontap.na_ontap_ems_destination:\n    state: present\n    name: rest\n    type: rest_api\n    filters:\n    - important_events\n    destination: http://my.rest.api/address\n    certificate: my_cert\n    ca: my_cert_ca\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Configure REST EMS destination with type syslog",
        "description": "- netapp.ontap.na_ontap_ems_destination",
        "body": "- name: Configure REST EMS destination with type syslog\n  netapp.ontap.na_ontap_ems_destination:\n    state: present\n    name: syslog_destination\n    type: syslog\n    filters:\n    - important_events\n    destination: http://my.rest.api/address\n    certificate: my_cert\n    ca: my_cert_ca\n    syslog:\n      transport: udp_unencrypted\n      port: 514\n      message_format: legacy_netapp\n      hostname_format_override: no_override\n      timestamp_format_override: no_override\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Remove email EMS destination",
        "description": "- netapp.ontap.na_ontap_ems_destination",
        "body": "- name: Remove email EMS destination\n  netapp.ontap.na_ontap_ems_destination:\n    state: absent\n    name: email_destination\n    type: email\n    filters:\n    - important_events\n    destination: netapp@company.com\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create EMS filter",
        "description": "- netapp.ontap.na_ontap_ems_filter",
        "body": "- name: Create EMS filter\n  netapp.ontap.na_ontap_ems_filter:\n    state: present\n    name: carchi_ems\n    rules:\n    - index: 1\n      type: include\n      message_criteria:\n        severities: error\n        name_pattern: callhome.*\n    - index: 2\n      type: include\n      message_criteria:\n        severities: EMERGENCY\n"
    },
    {
        "label": "Modify EMS filter add rule",
        "description": "- netapp.ontap.na_ontap_ems_filter",
        "body": "- name: Modify EMS filter add rule\n  netapp.ontap.na_ontap_ems_filter:\n    state: present\n    name: carchi_ems\n    rules:\n    - index: 1\n      type: include\n      message_criteria:\n        severities: error\n        name_pattern: callhome.*\n    - index: 2\n      type: include\n      message_criteria:\n        severities: EMERGENCY\n    - index: 3\n      type: include\n      message_criteria:\n        severities: ALERT\n"
    },
    {
        "label": "Delete EMS Filter",
        "description": "- netapp.ontap.na_ontap_ems_filter",
        "body": "- name: Delete EMS Filter\n  netapp.ontap.na_ontap_ems_filter:\n    state: absent\n    name: carchi_ems\n"
    },
    {
        "label": "Create Export Policy",
        "description": "- netapp.ontap.na_ontap_export_policy",
        "body": "- name: Create Export Policy\n  netapp.ontap.na_ontap_export_policy:\n    state: present\n    name: ansiblePolicyName\n    vserver: vs_hack\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename Export Policy",
        "description": "- netapp.ontap.na_ontap_export_policy",
        "body": "- name: Rename Export Policy\n  netapp.ontap.na_ontap_export_policy:\n    state: present\n    from_name: ansiblePolicyName\n    vserver: vs_hack\n    name: newPolicyName\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Export Policy",
        "description": "- netapp.ontap.na_ontap_export_policy",
        "body": "- name: Delete Export Policy\n  netapp.ontap.na_ontap_export_policy:\n    state: absent\n    name: ansiblePolicyName\n    vserver: vs_hack\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create ExportPolicyRule",
        "description": "- netapp.ontap.na_ontap_export_policy_rule",
        "body": "- name: Create ExportPolicyRule\n  netapp.ontap.na_ontap_export_policy_rule:\n    state: present\n    name: default123\n    rule_index: 100\n    vserver: ci_dev\n    client_match: 0.0.0.0/0,1.1.1.0/24\n    ro_rule: krb5,krb5i\n    rw_rule: any\n    protocol: nfs,nfs3\n    super_user_security: any\n    anonymous_user_id: 65534\n    allow_suid: true\n    ntfs_unix_security: ignore\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify ExportPolicyRule",
        "description": "- netapp.ontap.na_ontap_export_policy_rule",
        "body": "- name: Modify ExportPolicyRule\n  netapp.ontap.na_ontap_export_policy_rule:\n    state: present\n    name: default123\n    rule_index: 100\n    vserver: ci_dev\n    client_match: 0.0.0.0/0\n    anonymous_user_id: 65521\n    ro_rule: ntlm\n    rw_rule: any\n    protocol: any\n    allow_suid: false\n    ntfs_unix_security: fail\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename ExportPolicyRule index",
        "description": "- netapp.ontap.na_ontap_export_policy_rule",
        "body": "- name: Rename ExportPolicyRule index\n  netapp.ontap.na_ontap_export_policy_rule:\n    state: present\n    name: default123\n    from_rule_index: 100\n    rule_index: 99\n    client_match: 0.0.0.0/0\n    anonymous_user_id: 65521\n    ro_rule: ntlm\n    rw_rule: any\n    protocol: any\n    allow_suid: false\n    ntfs_unix_security: fail\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete ExportPolicyRule",
        "description": "- netapp.ontap.na_ontap_export_policy_rule",
        "body": "- name: Delete ExportPolicyRule\n  netapp.ontap.na_ontap_export_policy_rule:\n    state: absent\n    name: default123\n    rule_index: 99\n    vserver: ci_dev\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create FCP",
        "description": "- netapp.ontap.na_ontap_fcp",
        "body": "- name: Create FCP\n  netapp.ontap.na_ontap_fcp:\n    state: present\n    status: down\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: '{{ vserver_name }}'\n"
    },
    {
        "label": "Create File Directory Security Descriptor",
        "description": "- netapp.ontap.na_ontap_fdsd",
        "body": "- name: Create File Directory Security Descriptor\n  netapp.ontap.na_ontap_fdsd:\n    state: present\n    name: ansible_sdl\n    vserver: svm1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete File Directory Security Descriptor",
        "description": "- netapp.ontap.na_ontap_fdsd",
        "body": "- name: Delete File Directory Security Descriptor\n  netapp.ontap.na_ontap_fdsd:\n    state: absent\n    vserver: svm1\n    name: ansible_sdl\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create File Directory Security Policy",
        "description": "- netapp.ontap.na_ontap_fdsp",
        "body": "- name: Create File Directory Security Policy\n  netapp.ontap.na_ontap_fdsp:\n    state: present\n    name: ansible_security_policyl\n    vserver: svm1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete File Directory Security Policy",
        "description": "- netapp.ontap.na_ontap_fdsp",
        "body": "- name: Delete File Directory Security Policy\n  netapp.ontap.na_ontap_fdsp:\n    state: absent\n    vserver: svm1\n    name: ansible_security_policyl\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create File Directory Security Policy Task",
        "description": "- netapp.ontap.na_ontap_na_ontap_fdspt",
        "body": "- name: Create File Directory Security Policy Task\n  netapp.ontap.na_ontap_na_ontap_fdspt:\n    state: present\n    name: ansible_pl\n    access_control: file_directory\n    ntfs_sd: ansible1_sd\n    ntfs_mode: replace\n    security_type: ntfs\n    path: /volume1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify File Directory Security Policy Task",
        "description": "- netapp.ontap.na_ontap_na_ontap_fdspt",
        "body": "- name: Modify File Directory Security Policy Task\n  netapp.ontap.na_ontap_na_ontap_fdspt:\n    state: present\n    name: ansible_pl\n    access_control: file_directory\n    path: /volume1\n    ntfs_sd: ansible1_sd\n    ntfs_mode: replace\n    security_type: ntfs\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Remove File Directory Security Policy Task",
        "description": "- netapp.ontap.na_ontap_na_ontap_fdspt",
        "body": "- name: Remove File Directory Security Policy Task\n  netapp.ontap.na_ontap_na_ontap_fdspt:\n    state: absent\n    vserver: SVM1\n    name: ansible_pl\n    access_control: file_directory\n    path: /volume1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Set File Directory Security",
        "description": "- netapp.ontap.na_ontap_fdss",
        "body": "- name: Set File Directory Security\n  netapp.ontap.na_ontap_fdss:\n    state: present\n    vserver: svm1\n    name: ansible_pl\n    hostname: '{{ hostname }}'\n    username: '{{ username }}'\n    password: '{{ password }}'\n"
    },
    {
        "label": "Create policy",
        "description": "- netapp.ontap.na_ontap_file_directory_policy",
        "body": "- name: Create policy\n  netapp.ontap.na_ontap_file_directory_policy:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    vserver: ansible\n    policy_name: file_policy\n    ignore_broken_symlinks: false\n"
    },
    {
        "label": "Add task to existing file_policy",
        "description": "- netapp.ontap.na_ontap_file_directory_policy",
        "body": "- name: Add task to existing file_policy\n  netapp.ontap.na_ontap_file_directory_policy:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    vserver: ansible\n    policy_name: file_policy\n    path: /vol\n    ntfs_sd: ansible_sd\n    ntfs_mode: propagate\n"
    },
    {
        "label": "Delete task from file_policy.",
        "description": "- netapp.ontap.na_ontap_file_directory_policy",
        "body": "- name: Delete task from file_policy.\n  netapp.ontap.na_ontap_file_directory_policy:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: absent\n    vserver: ansible\n    policy_name: file_policy\n    path: /vol\n"
    },
    {
        "label": "Delete file_policy along with the tasks.",
        "description": "- netapp.ontap.na_ontap_file_directory_policy",
        "body": "- name: Delete file_policy along with the tasks.\n  netapp.ontap.na_ontap_file_directory_policy:\n    hostname: '{{ hostname }}'\n    username: '{{ username }}'\n    password: '{{ password }}'\n    state: absent\n    vserver: ansible\n    policy_name: file_policy\n"
    },
    {
        "label": "Create file directory security permissions.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions",
        "body": "- name: Create file directory security permissions.\n  netapp.ontap.na_ontap_file_security_permissions:\n    state: present\n    vserver: svm1\n    access_control: file_directory\n    path: /vol200/newfile.txt\n    owner: '{{ user }}'\n    acls:\n    - access: access_deny\n      user: '{{ user }}'\n      apply_to:\n        files: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify file directory security permissions.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions",
        "body": "- name: Modify file directory security permissions.\n  netapp.ontap.na_ontap_file_security_permissions:\n    state: present\n    vserver: svm1\n    access_control: file_directory\n    path: /vol200/newfile.txt\n    acls:\n    - access: access_deny\n      user: '{{ user }}'\n      apply_to:\n        files: true\n    - access: access_allow\n      user: '{{ user }}'\n      apply_to:\n        files: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete file directory security ACLs.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions",
        "body": "- name: Delete file directory security ACLs.\n  netapp.ontap.na_ontap_file_security_permissions:\n    state: absent\n    vserver: svm1\n    access_control: file_directory\n    path: /vol200/newfile.txt\n    acls:\n    - access: access_deny\n      user: '{{ user }}'\n      apply_to:\n        files: true\n    - access: access_allow\n      user: '{{ user }}'\n      apply_to:\n        files: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add ACL for file or directory security permissions.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions_acl",
        "body": "- name: Add ACL for file or directory security permissions.\n  netapp.ontap.na_ontap_file_security_permissions_acl:\n    vserver: '{{ vserver_name }}'\n    access_control: file_directory\n    path: '{{ file_mount_path }}'\n    validate_changes: warn\n    access: access_allow\n    acl_user: user1\n    apply_to:\n      this_folder: true\n    advanced_rights:\n      append_data: true\n      delete: false\n"
    },
    {
        "label": "Modify ACL for file or directory security permissions.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions_acl",
        "body": "- name: Modify ACL for file or directory security permissions.\n  netapp.ontap.na_ontap_file_security_permissions_acl:\n    vserver: '{{ vserver_name }}'\n    access_control: file_directory\n    path: '{{ file_mount_path }}'\n    validate_changes: warn\n    access: access_allow\n    acl_user: user1\n    apply_to:\n      this_folder: true\n    advanced_rights:\n      append_data: false\n      delete: true\n"
    },
    {
        "label": "Delete ACL for file or directory security permissions.",
        "description": "- netapp.ontap.na_ontap_file_security_permissions_acl",
        "body": "- name: Delete ACL for file or directory security permissions.\n  netapp.ontap.na_ontap_file_security_permissions_acl:\n    vserver: '{{ vserver_name }}'\n    access_control: file_directory\n    path: '{{ file_mount_path }}'\n    validate_changes: warn\n    access: access_allow\n    acl_user: user1\n    apply_to:\n      this_folder: true\n    state: absent\n"
    },
    {
        "label": "Create firewall Policy",
        "description": "- netapp.ontap.na_ontap_firewall_policy",
        "body": "- name: Create firewall Policy\n  netapp.ontap.na_ontap_firewall_policy:\n    state: present\n    allow_list:\n    - 1.2.3.0/24\n    - 1.3.0.0/16\n    policy: pizza\n    service: http\n    vserver: ci_dev\n    hostname: '{{ netapp hostname }}'\n    username: '{{ netapp username }}'\n    password: '{{ netapp password }}'\n"
    },
    {
        "label": "Modify firewall Policy",
        "description": "- netapp.ontap.na_ontap_firewall_policy",
        "body": "- name: Modify firewall Policy\n  netapp.ontap.na_ontap_firewall_policy:\n    state: present\n    allow_list:\n    - 1.5.3.0/24\n    policy: pizza\n    service: http\n    vserver: ci_dev\n    hostname: '{{ netapp hostname }}'\n    username: '{{ netapp username }}'\n    password: '{{ netapp password }}'\n"
    },
    {
        "label": "Destory firewall Policy",
        "description": "- netapp.ontap.na_ontap_firewall_policy",
        "body": "- name: Destory firewall Policy\n  netapp.ontap.na_ontap_firewall_policy:\n    state: absent\n    policy: pizza\n    service: http\n    vserver: ci_dev\n    hostname: '{{ netapp hostname }}'\n    username: '{{ netapp username }}'\n    password: '{{ netapp password }}'\n"
    },
    {
        "label": "Enable firewall and logging on a node",
        "description": "- netapp.ontap.na_ontap_firewall_policy",
        "body": "- name: Enable firewall and logging on a node\n  netapp.ontap.na_ontap_firewall_policy:\n    node: test-vsim1\n    enable: enable\n    logging: enable\n    hostname: '{{ netapp hostname }}'\n    username: '{{ netapp username }}'\n    password: '{{ netapp password }}'\n"
    },
    {
        "label": "Any firmware upgrade - REST",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: Any firmware upgrade - REST\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    package_url: '{{ web_link }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Firmware upgrade, confirm successful download",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: Firmware upgrade, confirm successful download\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    package_url: '{{ web_link }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    fail_on_502_error: true\n"
    },
    {
        "label": "SP firmware upgrade",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: SP firmware upgrade\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    node: vsim1\n    package: '{{ file name }}'\n    package_url: '{{ web_link }}'\n    clear_logs: true\n    install_baseline_image: false\n    update_type: serial_full\n    force_disruptive_update: false\n    firmware_type: service-processor\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "SP firmware download replace package",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: SP firmware download replace package\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    node: vsim1\n    package_url: '{{ web_link }}'\n    firmware_type: service-processor\n    replace_package: true\n    reboot_sp: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "SP firmware download rename package",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: SP firmware download rename package\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    node: vsim1\n    package_url: '{{ web_link }}'\n    firmware_type: service-processor\n    rename_package: SP_FW.zip\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "ACP firmware download and upgrade",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: ACP firmware download and upgrade\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    node: vsim1\n    firmware_type: acp\n    package_url: '{{ web_link }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Shelf firmware upgrade",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: Shelf firmware upgrade\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    firmware_type: shelf\n    package_url: '{{ web_link }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Disk firmware upgrade",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: Disk firmware upgrade\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    firmware_type: disk\n    package_url: '{{ web_link }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "SP firmware upgrade with reboots (REST)",
        "description": "- netapp.ontap.na_ontap_firmware_upgrade",
        "body": "- name: SP firmware upgrade with reboots (REST)\n  netapp.ontap.na_ontap_firmware_upgrade:\n    state: present\n    package_url: '{{ web_link }}'\n    firmware_type: service-processor\n    reboot_sp: true\n    reboot_sp_after_download: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create FlexCache",
        "description": "- netapp.ontap.na_ontap_flexcache",
        "body": "- name: Create FlexCache\n  netapp.ontap.na_ontap_flexcache:\n    state: present\n    origin_volume: test_src\n    name: test_dest\n    origin_vserver: ansible_src\n    vserver: ansible_dest\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete FlexCache",
        "description": "- netapp.ontap.na_ontap_flexcache",
        "body": "- name: Delete FlexCache\n  netapp.ontap.na_ontap_flexcache:\n    state: absent\n    name: test_dest\n    vserver: ansible_dest\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create FPolicy Event",
        "description": "- netapp.ontap.na_ontap_fpolicy_event",
        "body": "- name: Create FPolicy Event\n  netapp.ontap.na_ontap_fpolicy_event:\n    state: present\n    vserver: svm1\n    name: fpolicy_event\n    file_operations:\n    - create\n    - create_dir\n    - delete\n    - delete_dir\n    - read\n    - close\n    - rename\n    - rename_dir\n    filters:\n    - first_read\n    - close_with_modification\n    protocol: cifs\n    volume_monitoring: false\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify FPolicy Event",
        "description": "- netapp.ontap.na_ontap_fpolicy_event",
        "body": "- name: Modify FPolicy Event\n  netapp.ontap.na_ontap_fpolicy_event:\n    state: present\n    vserver: svm1\n    name: fpolicy_event\n    volume_monitoring: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete FPolicy Event",
        "description": "- netapp.ontap.na_ontap_fpolicy_event",
        "body": "- name: Delete FPolicy Event\n  netapp.ontap.na_ontap_fpolicy_event:\n    state: absent\n    vserver: svm1\n    name: fpolicy_event\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create fPolicy external engine",
        "description": "- netapp.ontap.na_ontap_fpolicy_ext_engine",
        "body": "- name: Create fPolicy external engine\n  netapp.ontap.na_ontap_fpolicy_ext_engine:\n    state: present\n    vserver: svm1\n    name: fpolicy_ext_engine\n    port: 8787\n    extern_engine_type: asynchronous\n    primary_servers:\n    - 10.11.12.13\n    - 10.11.12.14\n    ssl_option: no_auth\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify fPolicy external engine",
        "description": "- netapp.ontap.na_ontap_fpolicy_ext_engine",
        "body": "- name: Modify fPolicy external engine\n  netapp.ontap.na_ontap_fpolicy_ext_engine:\n    state: present\n    vserver: svm1\n    name: fpolicy_ext_engine\n    port: 7878\n    extern_engine_type: synchronous\n    primary_servers:\n    - 10.11.12.15\n    - 10.11.12.16\n    ssl_option: server_auth\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete fPolicy external engine",
        "description": "- netapp.ontap.na_ontap_fpolicy_ext_engine",
        "body": "- name: Delete fPolicy external engine\n  netapp.ontap.na_ontap_fpolicy_ext_engine:\n    state: absent\n    vserver: svm1\n    name: fpolicy_engine\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create FPolicy policy",
        "description": "- netapp.ontap.na_ontap_fpolicy_policy",
        "body": "- name: Create FPolicy policy\n  netapp.ontap.na_ontap_fpolicy_policy:\n    state: present\n    vserver: svm1\n    name: fpolicy_policy\n    events: fcpolicy_event\n    engine: fpolicy_ext_engine\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify FPolicy policy",
        "description": "- netapp.ontap.na_ontap_fpolicy_policy",
        "body": "- name: Modify FPolicy policy\n  netapp.ontap.na_ontap_fpolicy_policy:\n    state: present\n    vserver: svm1\n    name: fpolicy_policy\n    events: fcpolicy_event\n    is_mandatory: false\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete FPolicy policy",
        "description": "- netapp.ontap.na_ontap_fpolicy_policy",
        "body": "- name: Delete FPolicy policy\n  netapp.ontap.na_ontap_fpolicy_policy:\n    state: absent\n    vserver: svm1\n    name: fpolicy_policy\n    events: fcpolicy_event\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create FPolicy scope",
        "description": "- netapp.ontap.na_ontap_fpolicy_scope",
        "body": "- name: Create FPolicy scope\n  netapp.ontap.na_ontap_fpolicy_scope:\n    state: present\n    vserver: GBSMNAS80LD\n    name: policy1\n    export_policies_to_include: export1\n    shares_to_include: share1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify FPolicy scope",
        "description": "- netapp.ontap.na_ontap_fpolicy_scope",
        "body": "- name: Modify FPolicy scope\n  netapp.ontap.na_ontap_fpolicy_scope:\n    state: present\n    vserver: GBSMNAS80LD\n    name: policy1\n    export_policies_to_include: export1,export2\n    shares_to_include: share1,share2\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete FPolicy scope",
        "description": "- netapp.ontap.na_ontap_fpolicy_scope",
        "body": "- name: Delete FPolicy scope\n  netapp.ontap.na_ontap_fpolicy_scope:\n    state: absent\n    vserver: GBSMNAS80LD\n    name: policy1\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Enable fPolicy policy",
        "description": "- netapp.ontap.na_ontap_fpolicy_status",
        "body": "- name: Enable fPolicy policy\n  netapp.ontap.na_ontap_fpolicy_status:\n    state: present\n    vserver: svm1\n    policy_name: fpolicy_policy\n    sequence_number: 10\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Disable fPolicy policy",
        "description": "- netapp.ontap.na_ontap_fpolicy_status",
        "body": "- name: Disable fPolicy policy\n  netapp.ontap.na_ontap_fpolicy_status:\n    state: absent\n    vserver: svm1\n    policy_name: fpolicy_policy\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create iSCSI Igroup",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Create iSCSI Igroup\n  netapp.ontap.na_ontap_igroup:\n    state: present\n    name: ansibleIgroup3\n    initiator_group_type: iscsi\n    os_type: linux\n    initiator_names: iqn.1994-05.com.redhat:scspa0395855001.rtp.openenglab.netapp.com,abc.com:redhat.com\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create iSCSI Igroup - ONTAP 9.9",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Create iSCSI Igroup - ONTAP 9.9\n  netapp.ontap.na_ontap_igroup:\n    state: present\n    name: ansibleIgroup3\n    initiator_group_type: iscsi\n    os_type: linux\n    initiator_objects:\n    - name: iqn.1994-05.com.redhat:scspa0395855001.rtp.openenglab.netapp.com\n      comment: for test only\n    - name: abc.com:redhat.com\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create FC Igroup",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Create FC Igroup\n  netapp.ontap.na_ontap_igroup:\n    state: present\n    name: ansibleIgroup4\n    initiator_group_type: fcp\n    os_type: linux\n    initiator_names: 20:00:00:50:56:9f:19:82\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename Igroup",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Rename Igroup\n  netapp.ontap.na_ontap_igroup:\n    state: present\n    from_name: ansibleIgroup3\n    name: testexamplenewname\n    initiator_group_type: iscsi\n    os_type: linux\n    initiator_names: iqn.1994-05.com.redhat:scspa0395855001.rtp.openenglab.netapp.com\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify Igroup Initiators (replaces exisiting initiator_names)",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Modify Igroup Initiators (replaces exisiting initiator_names)\n  netapp.ontap.na_ontap_igroup:\n    state: present\n    name: ansibleIgroup3\n    initiator_group_type: iscsi\n    os_type: linux\n    initiator: iqn.1994-05.com.redhat:scspa0395855001.rtp.openenglab.netapp.com\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Igroup",
        "description": "- netapp.ontap.na_ontap_igroup",
        "body": "- name: Delete Igroup\n  netapp.ontap.na_ontap_igroup:\n    state: absent\n    name: ansibleIgroup3\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add initiators to an igroup",
        "description": "- netapp.ontap.na_ontap_igroup_initiator",
        "body": "- name: Add initiators to an igroup\n  netapp.ontap.na_ontap_igroup_initiator:\n    names: abc.test:def.com,def.test:efg.com\n    initiator_group: test_group\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Remove an initiator from an igroup",
        "description": "- netapp.ontap.na_ontap_igroup_initiator",
        "body": "- name: Remove an initiator from an igroup\n  netapp.ontap.na_ontap_igroup_initiator:\n    state: absent\n    names: abc.test:def.com\n    initiator_group: test_group\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Get NetApp info as Cluster Admin (Password Authentication)",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Get NetApp info as Cluster Admin (Password Authentication)\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n  register: ontap_info\n"
    },
    {
        "label": "Get NetApp version as Vserver admin",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Get NetApp version as Vserver admin\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: vsadmin\n    vserver: trident_svm\n    password: vsadmins_password\n"
    },
    {
        "label": "run ontap info module using vserver tunneling and ignoring errors",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: run ontap info module using vserver tunneling and ignoring errors\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n    vserver: trident_svm\n    summary: true\n    continue_on_error:\n    - missing_vserver_api_error\n    - rpc_error\n"
    },
    {
        "label": "Limit Info Gathering to Aggregate Information as Cluster Admin",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Limit Info Gathering to Aggregate Information as Cluster Admin\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n    gather_subset: aggregate_info\n  register: ontap_info\n"
    },
    {
        "label": "Limit Info Gathering to Volume and Lun Information as Cluster Admin",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Limit Info Gathering to Volume and Lun Information as Cluster Admin\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n    gather_subset:\n    - volume_info\n    - lun_info\n  register: ontap_info\n"
    },
    {
        "label": "Gather all info except for volume and lun information as Cluster Admin",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Gather all info except for volume and lun information as Cluster Admin\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n    gather_subset:\n    - '!volume_info'\n    - '!lun_info'\n  register: ontap_info\n"
    },
    {
        "label": "Gather Volume move information for a specific volume",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: Gather Volume move information for a specific volume\n  netapp.ontap.na_ontap_info:\n    hostname: na-vsim\n    username: admin\n    password: admins_password\n    gather_subset: volume_move_target_aggr_info\n    volume_move_target_aggr_info:\n      volume_name: carchitest\n      vserver: ansible\n"
    },
    {
        "label": "run ontap info module for aggregate module, requesting specific fields",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: run ontap info module for aggregate module, requesting specific fields\n  netapp.ontap.na_ontap_info:\n    gather_subset: aggregate_info\n    desired_attributes:\n      aggr-attributes: null\n      aggr-inode-attributes:\n        files-private-used: null\n      aggr-raid-attributes:\n        aggregate-type: null\n    use_native_zapi_tags: true\n    register: ontap\n"
    },
    {
        "label": "run ontap info to get offline volumes with dp in the name",
        "description": "- netapp.ontap.na_ontap_info",
        "body": "- name: run ontap info to get offline volumes with dp in the name\n  netapp.ontap.na_ontap_info:\n    gather_subset: volume_info\n    query:\n      volume-attributes:\n        volume-id-attributes:\n          name: '*dp*'\n        volume-state-attributes:\n          state: offline\n    desired_attributes:\n      volume-attributes:\n        volume-id-attributes:\n          name: null\n        volume-state-attributes:\n          state: null\n  register: ontap\n"
    },
    {
        "label": "Create interface - ZAPI",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Create interface - ZAPI\n  netapp.ontap.na_ontap_interface:\n    state: present\n    interface_name: data2\n    home_port: e0d\n    home_node: laurentn-vsim1\n    role: data\n    protocols:\n    - nfs\n    - cifs\n    admin_status: up\n    failover_policy: local-only\n    firewall_policy: mgmt\n    is_auto_revert: true\n    address: 10.10.10.10\n    netmask: 255.255.255.0\n    force_subnet_association: false\n    dns_domain_name: test.com\n    listen_for_dns_query: true\n    is_dns_update_enabled: true\n    vserver: svm1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create data interface - REST - NAS",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Create data interface - REST - NAS\n  netapp.ontap.na_ontap_interface:\n    state: present\n    interface_name: data2\n    home_port: e0d\n    home_node: laurentn-vsim1\n    admin_status: up\n    failover_scope: home_node_only\n    service_policy: default-data-files\n    is_auto_revert: true\n    interface_type: ip\n    address: 10.10.10.10\n    netmask: 255.255.255.0\n    vserver: svm1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create cluster interface - ZAPI",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Create cluster interface - ZAPI\n  netapp.ontap.na_ontap_interface:\n    state: present\n    interface_name: cluster_lif\n    home_port: e0a\n    home_node: cluster1-01\n    role: cluster\n    admin_status: up\n    is_auto_revert: true\n    is_ipv4_link_local: true\n    vserver: Cluster\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create cluster interface - REST",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Create cluster interface - REST\n  netapp.ontap.na_ontap_interface:\n    state: present\n    interface_name: cluster_lif\n    home_port: e0a\n    home_node: cluster1-01\n    service_policy: default-cluster\n    admin_status: up\n    is_auto_revert: true\n    vserver: Cluster\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename interface",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Rename interface\n  netapp.ontap.na_ontap_interface:\n    state: present\n    from_name: ansibleSVM_lif\n    interface_name: ansibleSVM_lif01\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Migrate an interface",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Migrate an interface\n  netapp.ontap.na_ontap_interface:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: ansible\n    https: true\n    validate_certs: false\n    state: present\n    interface_name: carchi_interface3\n    home_port: e0d\n    home_node: ansdev-stor-1\n    current_node: ansdev-stor-2\n    role: data\n    failover_policy: local-only\n    firewall_policy: mgmt\n    is_auto_revert: true\n    address: 10.10.10.12\n    netmask: 255.255.255.0\n    force_subnet_association: false\n    admin_status: up\n"
    },
    {
        "label": "Delete interface",
        "description": "- netapp.ontap.na_ontap_interface",
        "body": "- name: Delete interface\n  netapp.ontap.na_ontap_interface:\n    state: absent\n    interface_name: data2\n    vserver: svm1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create ipspace",
        "description": "- netapp.ontap.na_ontap_ipspace",
        "body": "- name: Create ipspace\n  netapp.ontap.na_ontap_ipspace:\n    state: present\n    name: ansibleIpspace\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete ipspace",
        "description": "- netapp.ontap.na_ontap_ipspace",
        "body": "- name: Delete ipspace\n  netapp.ontap.na_ontap_ipspace:\n    state: absent\n    name: ansibleIpspace\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename ipspace",
        "description": "- netapp.ontap.na_ontap_ipspace",
        "body": "- name: Rename ipspace\n  netapp.ontap.na_ontap_ipspace:\n    state: present\n    name: ansibleIpspace_newname\n    from_name: ansibleIpspace\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create iscsi service",
        "description": "- netapp.ontap.na_ontap_iscsi",
        "body": "- name: Create iscsi service\n  netapp.ontap.na_ontap_iscsi:\n    state: present\n    service_state: started\n    vserver: ansibleVServer\n    target_alias: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Stop Iscsi service",
        "description": "- netapp.ontap.na_ontap_iscsi",
        "body": "- name: Stop Iscsi service\n  netapp.ontap.na_ontap_iscsi:\n    state: present\n    service_state: stopped\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Iscsi service",
        "description": "- netapp.ontap.na_ontap_iscsi",
        "body": "- name: Delete Iscsi service\n  netapp.ontap.na_ontap_iscsi:\n    state: absent\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create iscsi security",
        "description": "- netapp.ontap.na_ontap_iscsi_security",
        "body": "- name: Create iscsi security\n  netapp.ontap.na_ontap_iscsi_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: test_svm\n    state: present\n    initiator: eui.9999956789abcdef\n    inbound_username: user_1\n    inbound_password: password_1\n    outbound_username: user_2\n    outbound_password: password_2\n    auth_type: chap\n    address_ranges: 10.125.10.0-10.125.10.10,10.125.193.78\n"
    },
    {
        "label": "Modify outbound username",
        "description": "- netapp.ontap.na_ontap_iscsi_security",
        "body": "- name: Modify outbound username\n  netapp.ontap.na_ontap_iscsi_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: test_svm\n    state: present\n    initiator: eui.9999956789abcdef\n    inbound_username: user_1\n    inbound_password: password_1\n    outbound_username: user_out_3\n    outbound_password: password_3\n    auth_type: chap\n    address_ranges: 10.125.10.0-10.125.10.10,10.125.193.78\n"
    },
    {
        "label": "Modify address",
        "description": "- netapp.ontap.na_ontap_iscsi_security",
        "body": "- name: Modify address\n  netapp.ontap.na_ontap_iscsi_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: test_svm\n    state: present\n    initiator: eui.9999956789abcdef\n    address_ranges: 10.125.193.90,10.125.10.20-10.125.10.30\n"
    },
    {
        "label": "Create Job for 11.30PM at 10th of every month",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Create Job for 11.30PM at 10th of every month\n  netapp.ontap.na_ontap_job_schedule:\n    state: present\n    name: jobName\n    job_minutes: 30\n    job_hours: 23\n    job_days_of_month: 10\n    job_months: -1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Job for 11.30PM at 10th of January, April, July, October for ZAPI and REST",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Create Job for 11.30PM at 10th of January, April, July, October for ZAPI and\n    REST\n  netapp.ontap.na_ontap_job_schedule:\n    state: present\n    name: jobName\n    job_minutes: 30\n    job_hours: 23\n    job_days_of_month: 10\n    job_months: 1,4,7,10\n    month_offset: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Job for 11.30PM at 10th of January, April, July, October for ZAPI and REST",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Create Job for 11.30PM at 10th of January, April, July, October for ZAPI and\n    REST\n  netapp.ontap.na_ontap_job_schedule:\n    state: present\n    name: jobName\n    job_minutes: 30\n    job_hours: 23\n    job_days_of_month: 10\n    job_months: 0,3,6,9\n    month_offset: 0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Job for 11.30PM at 10th of January when using REST and February when using ZAPI !!!",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Create Job for 11.30PM at 10th of January when using REST and February when\n    using ZAPI !!!\n  netapp.ontap.na_ontap_job_schedule:\n    state: present\n    name: jobName\n    job_minutes: 30\n    job_hours: 23\n    job_days_of_month: 10\n    job_months: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Interval Job using REST",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Create Interval Job using REST\n  netapp.ontap.na_ontap_job_schedule:\n    state: present\n    name: jobName\n    interval: P1DT2H3M4S\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Job",
        "description": "- netapp.ontap.na_ontap_job_schedule",
        "body": "- name: Delete Job\n  netapp.ontap.na_ontap_job_schedule:\n    state: absent\n    name: jobName\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable kerberos interface.",
        "description": "- netapp.ontap.na_ontap_kerberos_interface",
        "body": "- name: Enable kerberos interface.\n  netapp.ontap.na_ontap_kerberos_interface:\n    interface_name: lif_svm1_284\n    vserver: ansibleSVM\n    enabled: true\n    service_principal_name: nfs/lif_svm1_284@RELAM2\n    admin_username: '{{ admin_user }}'\n    admin_password: '{{ admin_pass }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Disable kerberos interface.",
        "description": "- netapp.ontap.na_ontap_kerberos_interface",
        "body": "- name: Disable kerberos interface.\n  netapp.ontap.na_ontap_kerberos_interface:\n    interface_name: lif_svm1_284\n    vserver: ansibleSVM\n    enabled: false\n    admin_username: '{{ admin_user }}'\n    admin_password: '{{ admin_pass }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create kerberos realm other kdc vendor",
        "description": "- netapp.ontap.na_ontap_kerberos_realm",
        "body": "- name: Create kerberos realm other kdc vendor\n  netapp.ontap.na_ontap_kerberos_realm:\n    state: present\n    realm: EXAMPLE.COM\n    vserver: vserver1\n    kdc_ip: 1.2.3.4\n    kdc_vendor: other\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create kerberos realm Microsoft kdc vendor",
        "description": "- netapp.ontap.na_ontap_kerberos_realm",
        "body": "- name: Create kerberos realm Microsoft kdc vendor\n  netapp.ontap.na_ontap_kerberos_realm:\n    state: present\n    realm: EXAMPLE.COM\n    vserver: vserver1\n    kdc_ip: 1.2.3.4\n    kdc_vendor: microsoft\n    ad_server_ip: 0.0.0.0\n    ad_server_name: server\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create kerberos realm other kdc vendor - REST",
        "description": "- netapp.ontap.na_ontap_kerberos_realm",
        "body": "- name: Create kerberos realm other kdc vendor - REST\n  netapp.ontap.na_ontap_kerberos_realm:\n    state: present\n    realm: EXAMPLE.COM\n    vserver: vserver1\n    kdc_ip: 1.2.3.4\n    kdc_vendor: other\n    pw_server_ip: 0.0.0.0\n    pw_server_port: '5'\n    admin_server_ip: 1.2.3.4\n    admin_server_port: '2'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable LDAP on SVM",
        "description": "- netapp.ontap.na_ontap_ldap",
        "body": "- name: Enable LDAP on SVM\n  netapp.ontap.na_ontap_ldap:\n    state: present\n    name: example_ldap\n    vserver: vserver1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create LDAP client",
        "description": "- netapp.ontap.na_ontap_ldap_client",
        "body": "- name: Create LDAP client\n  netapp.ontap.na_ontap_ldap_client:\n    state: present\n    vserver: vserver1\n    servers: ldap1.example.company.com,ldap2.example.company.com\n    base_dn: dc=example,dc=company,dc=com\n"
    },
    {
        "label": "Modify LDAP client",
        "description": "- netapp.ontap.na_ontap_ldap_client",
        "body": "- name: Modify LDAP client\n  netapp.ontap.na_ontap_ldap_client:\n    state: present\n    vserver: vserver1\n    servers: ldap1.example.company.com\n    base_dn: dc=example,dc=company,dc=com\n    skip_config_validation: true\n"
    },
    {
        "label": "Delete LDAP client",
        "description": "- netapp.ontap.na_ontap_ldap_client",
        "body": "- name: Delete LDAP client\n  netapp.ontap.na_ontap_ldap_client:\n    state: absent\n    vserver: vserver1\n"
    },
    {
        "label": "Add licenses - 28 character keys",
        "description": "- netapp.ontap.na_ontap_license",
        "body": "- name: Add licenses - 28 character keys\n  netapp.ontap.na_ontap_license:\n    state: present\n    serial_number: null\n    license_codes: CODE1,CODE2\n"
    },
    {
        "label": "Remove licenses",
        "description": "- netapp.ontap.na_ontap_license",
        "body": "- name: Remove licenses\n  netapp.ontap.na_ontap_license:\n    state: absent\n    remove_unused: false\n    remove_expired: true\n    serial_number: null\n    license_names: nfs,cifs\n"
    },
    {
        "label": "Add NLF licenses",
        "description": "- netapp.ontap.na_ontap_license",
        "body": "- name: Add NLF licenses\n  netapp.ontap.na_ontap_license:\n    state: present\n    license_codes:\n    - '{{ lookup(''file'', nlf_filepath) | string }}'\n"
    },
    {
        "label": "Remove NLF license bundle - using license file",
        "description": "- netapp.ontap.na_ontap_license",
        "body": "- name: Remove NLF license bundle - using license file\n  netapp.ontap.na_ontap_license:\n    state: absent\n    license_codes:\n    - '{{ lookup(''file'', nlf_filepath) | string }}'\n"
    },
    {
        "label": "Remove NLF license bundle - using bundle name",
        "description": "- netapp.ontap.na_ontap_license",
        "body": "- name: Remove NLF license bundle - using bundle name\n  netapp.ontap.na_ontap_license:\n    state: absent\n    remove_unused: false\n    remove_expired: true\n    serial_number: null\n    license_names: Enterprise Edition\n"
    },
    {
        "label": "Create IP to host mapping",
        "description": "- netapp.ontap.na_ontap_local_hosts",
        "body": "- name: Create IP to host mapping\n  netapp.ontap.na_ontap_local_hosts:\n    state: present\n    address: 10.10.10.10\n    host: example.com\n    aliases:\n    - ex1.com\n    - ex2.com\n    owner: svm1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify IP to host mapping",
        "description": "- netapp.ontap.na_ontap_local_hosts",
        "body": "- name: Modify IP to host mapping\n  netapp.ontap.na_ontap_local_hosts:\n    state: present\n    address: 10.10.10.10\n    owner: svm1\n    host: example1.com\n    aliases:\n    - ex1.com\n    - ex2.com\n    - ex3.com\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete host object",
        "description": "- netapp.ontap.na_ontap_local_hosts",
        "body": "- name: Delete host object\n  netapp.ontap.na_ontap_local_hosts:\n    state: absent\n    address: 10.10.10.10\n    owner: svm1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify vserver banner",
        "description": "- netapp.ontap.na_ontap_login_messages",
        "body": "- name: Modify vserver banner\n  netapp.ontap.na_ontap_login_messages:\n    vserver: trident_svm\n    banner: this is trident vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify vserver motd",
        "description": "- netapp.ontap.na_ontap_login_messages",
        "body": "- name: Modify vserver motd\n  netapp.ontap.na_ontap_login_messages:\n    vserver: trident_svm\n    motd_message: this is trident vserver\n    show_cluster_motd: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify motd cluster - REST",
        "description": "- netapp.ontap.na_ontap_login_messages",
        "body": "- name: Modify motd cluster - REST\n  netapp.ontap.na_ontap_login_messages:\n    motd_message: this is a cluster motd with REST\n    show_cluster_motd: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create log forward configuration",
        "description": "- netapp.ontap.na_ontap_log_forward",
        "body": "- name: Create log forward configuration\n  netapp.ontap.na_ontap_log_forward:\n    state: present\n    destination: 10.11.12.13\n    port: 514\n    protocol: udp_unencrypted\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify log forward configuration",
        "description": "- netapp.ontap.na_ontap_log_forward",
        "body": "- name: Modify log forward configuration\n  netapp.ontap.na_ontap_log_forward:\n    state: present\n    destination: 10.11.12.13\n    port: 514\n    protocol: tcp_unencrypted\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete log forward configuration",
        "description": "- netapp.ontap.na_ontap_log_forward",
        "body": "- name: Delete log forward configuration\n  netapp.ontap.na_ontap_log_forward:\n    state: absent\n    destination: 10.11.12.13\n    port: 514\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create LUN",
        "description": "- netapp.ontap.na_ontap_lun",
        "body": "- name: Create LUN\n  netapp.ontap.na_ontap_lun:\n    state: present\n    name: ansibleLUN\n    flexvol_name: ansibleVolume\n    vserver: ansibleVServer\n    size: 5\n    size_unit: mb\n    os_type: linux\n    space_reserve: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Resize LUN",
        "description": "- netapp.ontap.na_ontap_lun",
        "body": "- name: Resize LUN\n  netapp.ontap.na_ontap_lun:\n    state: present\n    name: ansibleLUN\n    force_resize: true\n    flexvol_name: ansibleVolume\n    vserver: ansibleVServer\n    size: 5\n    size_unit: gb\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create LUNs using SAN application",
        "description": "- netapp.ontap.na_ontap_lun",
        "body": "- name: Create LUNs using SAN application\n  netapp.ontap.na_ontap_lun:\n    state: present\n    name: ansibleLUN\n    size: 15\n    size_unit: mb\n    os_type: linux\n    space_reserve: false\n    san_application_template:\n      name: san-ansibleLUN\n      igroup_name: testme_igroup\n      lun_count: 3\n      protection_type: null\n      local_policy: default\n      exclude_aggregates: aggr0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Convert existing volume to SAN application",
        "description": "- netapp.ontap.na_ontap_lun",
        "body": "- name: Convert existing volume to SAN application\n  netapp.ontap.na_ontap_lun:\n    state: present\n    name: someVolume\n    size: 22\n    size_unit: mb\n    os_type: linux\n    space_reserve: false\n    san_application_template:\n      name: san-ansibleLUN\n      igroup_name: testme_igroup\n      lun_count: 3\n      protection_type: null\n      local_policy: default\n      scope: application\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create LUNs",
        "description": "- netapp.ontap.na_ontap_lun",
        "body": "- name: Create LUNs\n  netapp.ontap.na_ontap_lun:\n    state: present\n    name: ansibleLUN\n    flexvol_name: ansibleVolume\n    vserver: ansibleVServer\n    size: 5\n    size_unit: mb\n    os_type: linux\n    provisioning_options:\n      count: 2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Copy LUN",
        "description": "- netapp.ontap.na_ontap_lun_copy",
        "body": "- name: Copy LUN\n  netapp.ontap.na_ontap_lun_copy:\n    destination_vserver: ansible\n    destination_path: /vol/test/test_copy_dest_dest_new\n    source_path: /vol/test/test_copy_1\n    source_vserver: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create LUN mapping",
        "description": "- netapp.ontap.na_ontap_lun_map",
        "body": "- name: Create LUN mapping\n  netapp.ontap.na_ontap_lun_map:\n    state: present\n    initiator_group_name: ansibleIgroup3234\n    path: /vol/iscsi_path/iscsi_lun\n    vserver: ci_dev\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Unmap LUN",
        "description": "- netapp.ontap.na_ontap_lun_map",
        "body": "- name: Unmap LUN\n  netapp.ontap.na_ontap_lun_map:\n    state: absent\n    initiator_group_name: ansibleIgroup3234\n    path: /vol/iscsi_path/iscsi_lun\n    vserver: ci_dev\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Lun Map reporting nodes",
        "description": "- netapp.ontap.na_ontap_lun_map_reporting_nodes",
        "body": "- name: Create Lun Map reporting nodes\n  netapp.ontap.na_ontap_lun_map_reporting_nodes:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: vs1\n    state: present\n    initiator_group_name: carchigroup\n    path: /vol/carchiVolTest/carchiLunTest\n    nodes:\n    - node2\n"
    },
    {
        "label": "Delete Lun Map reporting nodes",
        "description": "- netapp.ontap.na_ontap_lun_map_reporting_nodes",
        "body": "- name: Delete Lun Map reporting nodes\n  netapp.ontap.na_ontap_lun_map_reporting_nodes:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    vserver: vs1\n    state: absent\n    initiator_group_name: carchigroup\n    path: /vol/carchiVolTest/carchiLunTest\n    nodes:\n    - node2\n"
    },
    {
        "label": "Create an approval group",
        "description": "- netapp.ontap.na_ontap_mav_approval_group",
        "body": "- name: Create an approval group\n  netapp.ontap.na_ontap_mav_approval_group:\n    state: present\n    name: group1\n    email:\n    - group1@netapp.com\n    approvers:\n    - admin1\n    - admin2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Update an approval group",
        "description": "- netapp.ontap.na_ontap_mav_approval_group",
        "body": "- name: Update an approval group\n  netapp.ontap.na_ontap_mav_approval_group:\n    state: present\n    name: group1\n    approvers:\n    - admin1\n    - admin3\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Delete an approval group",
        "description": "- netapp.ontap.na_ontap_mav_approval_group",
        "body": "- name: Delete an approval group\n  netapp.ontap.na_ontap_mav_approval_group:\n    state: absent\n    name: group1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Enable multi-admin approval",
        "description": "- netapp.ontap.na_ontap_mav_config",
        "body": "- name: Enable multi-admin approval\n  netapp.ontap.na_ontap_mav_config:\n    state: present\n    enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Update MAV configuration",
        "description": "- netapp.ontap.na_ontap_mav_config",
        "body": "- name: Update MAV configuration\n  netapp.ontap.na_ontap_mav_config:\n    state: present\n    approval_groups:\n    - group1\n    - group2\n    execution_expiry: P14D\n    approval_expiry: P14D\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Disable multi-admin approval",
        "description": "- netapp.ontap.na_ontap_mav_config",
        "body": "- name: Disable multi-admin approval\n  netapp.ontap.na_ontap_mav_config:\n    state: present\n    enabled: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Create a rule",
        "description": "- netapp.ontap.na_ontap_mav_rule",
        "body": "- name: Create a rule\n  netapp.ontap.na_ontap_mav_rule:\n    state: present\n    auto_request_create: true\n    required_approvers: 1\n    approval_groups:\n    - group1\n    - group2\n    approval_expiry: P14D\n    execution_expiry: P14D\n    operation: volume delete\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Update a rule",
        "description": "- netapp.ontap.na_ontap_mav_rule",
        "body": "- name: Update a rule\n  netapp.ontap.na_ontap_mav_rule:\n    state: present\n    query: -vserver svm1\n    operation: volume delete\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Delete a rule",
        "description": "- netapp.ontap.na_ontap_mav_rule",
        "body": "- name: Delete a rule\n  netapp.ontap.na_ontap_mav_rule:\n    state: absent\n    operation: volume delete\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Add ONTAP MCCIP Mediator",
        "description": "- netapp.ontap.na_ontap_mcc_mediator",
        "body": "- name: Add ONTAP MCCIP Mediator\n  netapp.ontap.na_ontap_mcc_mediator:\n    state: present\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    mediator_address: mediator_ip\n    mediator_user: metrocluster_admin\n    mediator_password: metrocluster_password\n"
    },
    {
        "label": "Delete ONTAP MCCIP Mediator",
        "description": "- netapp.ontap.na_ontap_mcc_mediator",
        "body": "- name: Delete ONTAP MCCIP Mediator\n  netapp.ontap.na_ontap_mcc_mediator:\n    state: absent\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    mediator_user: metrocluster_admin\n    mediator_password: metrocluster_password\n"
    },
    {
        "label": "Create MetroCluster",
        "description": "- netapp.ontap.na_ontap_metrocluster",
        "body": "- name: Create MetroCluster\n  netapp.ontap.na_ontap_metrocluster:\n    dr_pairs:\n    - partner_node_name: rha17-a2\n      node_name: rha17-b2\n    partner_cluster_name: rha2-b2b1_siteB\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create MetroCluster DR group",
        "description": "- netapp.ontap.na_ontap_metrocluster_dr_group",
        "body": "- name: Create MetroCluster DR group\n  netapp.ontap.na_ontap_metrocluster_dr_group:\n    dr_pairs:\n    - partner_name: carchi_cluster3_01\n      node_name: carchi_cluster1_01\n    partner_cluster_name: carchi_cluster3\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Delete MetroCluster DR group",
        "description": "- netapp.ontap.na_ontap_metrocluster_dr_group",
        "body": "- name: Delete MetroCluster DR group\n  netapp.ontap.na_ontap_metrocluster_dr_group:\n    dr_pairs:\n    - partner_name: carchi_cluster3_01\n      node_name: carchi_cluster1_01\n    state: absent\n    partner_cluster_name: carchi_cluster3\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Set Cluster-Level MOTD",
        "description": "- netapp.ontap.na_ontap_motd",
        "body": "- name: Set Cluster-Level MOTD\n  netapp.ontap.na_ontap_motd:\n    vserver: my_ontap_cluster\n    motd_message: Cluster wide MOTD\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    https: true\n"
    },
    {
        "label": "Set MOTD for I(rhev_nfs_krb) SVM, do not show Cluster-Level MOTD",
        "description": "- netapp.ontap.na_ontap_motd",
        "body": "- name: Set MOTD for I(rhev_nfs_krb) SVM, do not show Cluster-Level MOTD\n  netapp.ontap.na_ontap_motd:\n    vserver: rhev_nfs_krb\n    motd_message: Access to rhev_nfs_krb is also restricted\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: present\n    show_cluster_motd: false\n    https: true\n"
    },
    {
        "label": "Remove Cluster-Level MOTD",
        "description": "- netapp.ontap.na_ontap_motd",
        "body": "- name: Remove Cluster-Level MOTD\n  netapp.ontap.na_ontap_motd:\n    vserver: my_ontap_cluster\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    state: absent\n    https: true\n"
    },
    {
        "label": "Create name mappings configuration",
        "description": "- netapp.ontap.na_ontap_name_mappings",
        "body": "- name: Create name mappings configuration\n  netapp.ontap.na_ontap_name_mappings:\n    vserver: vserverName\n    direction: win_unix\n    index: 1\n    pattern: ENGCIFS_AD_USER\n    replacement: unix_user\n    client_match: 10.254.101.111/28\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify name mappings configuration",
        "description": "- netapp.ontap.na_ontap_name_mappings",
        "body": "- name: Modify name mappings configuration\n  netapp.ontap.na_ontap_name_mappings:\n    vserver: vserverName\n    direction: win_unix\n    index: 1\n    pattern: ENGCIFS_AD_USERS\n    replacement: unix_user1\n    client_match: 10.254.101.112/28\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Swap name mappings position",
        "description": "- netapp.ontap.na_ontap_name_mappings",
        "body": "- name: Swap name mappings position\n  netapp.ontap.na_ontap_name_mappings:\n    vserver: vserverName\n    direction: win_unix\n    index: 1\n    pattern: ENGCIFS_AD_USERS\n    replacement: unix_user1\n    from_index: 2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete name mappings configuration",
        "description": "- netapp.ontap.na_ontap_name_mappings",
        "body": "- name: Delete name mappings configuration\n  netapp.ontap.na_ontap_name_mappings:\n    vserver: vserverName\n    direction: win_unix\n    index: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create name service database",
        "description": "- netapp.ontap.na_ontap_name_service_switch",
        "body": "- name: Create name service database\n  netapp.ontap.na_ontap_name_service_switch:\n    state: present\n    database_type: namemap\n    sources: files,ldap\n    vserver: '{{ Vserver name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify name service database sources",
        "description": "- netapp.ontap.na_ontap_name_service_switch",
        "body": "- name: Modify name service database sources\n  netapp.ontap.na_ontap_name_service_switch:\n    state: present\n    database_type: namemap\n    sources: files\n    vserver: '{{ Vserver name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Modify ndmp",
        "description": "- netapp.ontap.na_ontap_ndmp",
        "body": "- name: Modify ndmp\n  netapp.ontap.na_ontap_ndmp:\n    vserver: ansible\n    abort_on_disk_error: true\n    authtype: plaintext,challenge\n    backup_log_enable: true\n    data_port_range: 8000-9000\n    debug_enable: true\n    debug_filter: filter\n    dump_detailed_stats: true\n    dump_logical_find: default\n    enable: true\n    fh_dir_retry_interval: 100\n    fh_node_retry_interval: 100\n    ignore_ctime_enabled: true\n    is_secure_control_connection_enabled: true\n    offset_map_enable: true\n    per_qtree_exclude_enable: true\n    preferred_interface_role: node_mgmt,intercluster\n    restore_vm_cache_size: 1000\n    secondary_debug_filter: filter\n    tcpnodelay: true\n    tcpwinsize: 10000\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "generate password - REST",
        "description": "- netapp.ontap.na_ontap_ndmp",
        "body": "- name: generate password - REST\n  netapp.ontap.na_ontap_ndmp:\n    ndmp_user: ndmp_user\n    vserver: vs0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "Create ifgrp",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Create ifgrp\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    distribution_function: ip\n    name: a0c\n    ports:\n    - e0a\n    mode: multimode\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Modify ports in an ifgrp",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Modify ports in an ifgrp\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    distribution_function: ip\n    name: a0c\n    port:\n    - e0a\n    - e0c\n    mode: multimode\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Delete ifgrp",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Delete ifgrp\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: a0c\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Create ifgrp - REST",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Create ifgrp - REST\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    distribution_function: ip\n    ports:\n    - e0a\n    - e0b\n    mode: multimode\n    node: '{{ vsim_node_name }}'\n    broadcast_domain: Default\n    ipspace: Default\n"
    },
    {
        "label": "Remove e0a and add port e0d to above created lag REST",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Remove e0a and add port e0d to above created lag REST\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    from_lag_ports:\n    - a0a\n    - e0b\n    ports:\n    - e0b\n    - e0d\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Add e0a to lag that has port e0b e0d REST",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Add e0a to lag that has port e0b e0d REST\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    distribution_function: ip\n    ports:\n    - e0b\n    - e0d\n    - e0a\n    mode: multimode\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Modify broadcast_domain and ipspace REST",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Modify broadcast_domain and ipspace REST\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    broadcast_domain: test\n    ipspace: test\n    ports:\n    - e0b\n    - e0d\n    - e0a\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Delete LAG with exact match of ports",
        "description": "- netapp.ontap.na_ontap_net_ifgrp",
        "body": "- name: Delete LAG with exact match of ports\n  netapp.ontap.na_ontap_net_ifgrp:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    ports:\n    - e0b\n    - e0d\n    - e0a\n    node: '{{ vsim_node_name }}'\n"
    },
    {
        "label": "Modify Net Port",
        "description": "- netapp.ontap.na_ontap_net_port",
        "body": "- name: Modify Net Port\n  netapp.ontap.na_ontap_net_port:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    node: '{{ node_name }}'\n    ports: e0d,e0c\n    autonegotiate_admin: true\n    up_admin: true\n    mtu: 1500\n    flowcontrol_admin: full\n    ipspace: test_ipspace\n"
    },
    {
        "label": "Create route",
        "description": "- netapp.ontap.na_ontap_net_routes",
        "body": "- name: Create route\n  netapp.ontap.na_ontap_net_routes:\n    state: present\n    vserver: '{{ vserver_name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    destination: 10.7.125.5/20\n    gateway: 10.7.125.1\n    metric: 30\n"
    },
    {
        "label": "Create route - cluster scope, using REST",
        "description": "- netapp.ontap.na_ontap_net_routes",
        "body": "- name: Create route - cluster scope, using REST\n  netapp.ontap.na_ontap_net_routes:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    destination: 10.7.125.5/20\n    gateway: 10.7.125.1\n"
    },
    {
        "label": "Create route - vserver scope, using REST",
        "description": "- netapp.ontap.na_ontap_net_routes",
        "body": "- name: Create route - vserver scope, using REST\n  netapp.ontap.na_ontap_net_routes:\n    state: present\n    vserver: '{{ vserver_name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    destination: 10.7.125.5/20\n    gateway: 10.7.125.1\n"
    },
    {
        "label": "Create subnet",
        "description": "- netapp.ontap.na_ontap_net_subnet",
        "body": "- name: Create subnet\n  netapp.ontap.na_ontap_net_subnet:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    subnet: 10.10.10.0/24\n    name: subnet-adm\n    ip_ranges:\n    - 10.10.10.30-10.10.10.40\n    - 10.10.10.51\n    gateway: 10.10.10.254\n    ipspace: Default\n    broadcast_domain: Default\n"
    },
    {
        "label": "Delete subnet",
        "description": "- netapp.ontap.na_ontap_net_subnet",
        "body": "- name: Delete subnet\n  netapp.ontap.na_ontap_net_subnet:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: subnet-adm\n    ipspace: Default\n"
    },
    {
        "label": "Rename subnet",
        "description": "- netapp.ontap.na_ontap_net_subnet",
        "body": "- name: Rename subnet\n  netapp.ontap.na_ontap_net_subnet:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    name: subnet-adm-new\n    from_name: subnet-adm\n    ipspace: Default\n"
    },
    {
        "label": "Create VLAN",
        "description": "- netapp.ontap.na_ontap_net_vlan",
        "body": "- name: Create VLAN\n  netapp.ontap.na_ontap_net_vlan:\n    state: present\n    vlanid: 13\n    node: '{{ vlan_node }}'\n    ipspace: '{{ ipspace_name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Create and add vlan to broadcast domain - REST",
        "description": "- netapp.ontap.na_ontap_net_vlan",
        "body": "- name: Create and add vlan to broadcast domain - REST\n  netapp.ontap.na_ontap_net_vlan:\n    state: present\n    vlanid: 14\n    node: '{{ vlan_node }}'\n    parent_interface: '{{ vlan_parent_interface_name }}'\n    broadcast_domain: '{{ broadcast_domain_name }}'\n    ipspace: '{{ ipspace_name }}'\n    enabled: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Disable VLAN - REST",
        "description": "- netapp.ontap.na_ontap_net_vlan",
        "body": "- name: Disable VLAN - REST\n  netapp.ontap.na_ontap_net_vlan:\n    state: present\n    vlanid: 14\n    node: '{{ vlan_node }}'\n    parent_interface: '{{ vlan_parent_interface_name }}'\n    enabled: false\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Delete VLAN",
        "description": "- netapp.ontap.na_ontap_net_vlan",
        "body": "- name: Delete VLAN\n  netapp.ontap.na_ontap_net_vlan:\n    state: absent\n    vlanid: 14\n    node: '{{ vlan_node }}'\n    parent_interface: '{{ vlan_parent_interface_name }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Change nfs status",
        "description": "- netapp.ontap.na_ontap_nfs",
        "body": "- name: Change nfs status\n  netapp.ontap.na_ontap_nfs:\n    state: present\n    service_state: stopped\n    vserver: vs_hack\n    nfsv3: disabled\n    nfsv4: disabled\n    nfsv41: enabled\n    tcp: disabled\n    udp: disabled\n    vstorage_state: disabled\n    nfsv4_id_domain: example.com\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create nfs configuration - REST",
        "description": "- netapp.ontap.na_ontap_nfs",
        "body": "- name: Create nfs configuration - REST\n  netapp.ontap.na_ontap_nfs:\n    state: present\n    service_state: stopped\n    vserver: vs_hack\n    nfsv3: disabled\n    nfsv4: disabled\n    nfsv41: enabled\n    tcp: disabled\n    udp: disabled\n    vstorage_state: disabled\n    nfsv4_id_domain: example.com\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify nfs configuration - REST",
        "description": "- netapp.ontap.na_ontap_nfs",
        "body": "- name: Modify nfs configuration - REST\n  netapp.ontap.na_ontap_nfs:\n    state: present\n    vserver: vs_hack\n    root:\n      ignore_nt_acl: true\n      skip_write_permission_check: true\n    security:\n      chown_mode: restricted\n      nt_acl_display_permission: true\n      ntfs_unix_security: fail\n      rpcsec_context_idle: 5\n    windows:\n      v3_ms_dos_client_enabled: true\n      map_unknown_uid_to_default_user: false\n      default_user: test_user\n    tcp_max_xfer_size: 16384\n    nfsv3_hide_snapdir: enabled\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete nfs configuration",
        "description": "- netapp.ontap.na_ontap_nfs",
        "body": "- name: Delete nfs configuration\n  netapp.ontap.na_ontap_nfs:\n    state: absent\n    vserver: vs_hack\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify node",
        "description": "- netapp.ontap.na_ontap_node",
        "body": "- name: Modify node\n  netapp.ontap.na_ontap_node:\n    name: laurentncluster-2\n    location: SF1\n    asset_tag: mytag\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename node",
        "description": "- netapp.ontap.na_ontap_node",
        "body": "- name: Rename node\n  netapp.ontap.na_ontap_node:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    from_name: laurentn-vsim1\n    name: laurentncluster-2\n"
    },
    {
        "label": "Modify and rename node",
        "description": "- netapp.ontap.na_ontap_node",
        "body": "- name: Modify and rename node\n  netapp.ontap.na_ontap_node:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    location: SF2\n    from_name: laurentn-vsim1\n    name: laurentncluster-2\n"
    },
    {
        "label": "Add NTFS DACL",
        "description": "- netapp.ontap.na_ontap_ntfs_dacl",
        "body": "- name: Add NTFS DACL\n  netapp.ontap.na_ontap_ntfs_dacl:\n    state: present\n    vserver: SVM1\n    security_descriptor: ansible_sd\n    access_type: allow\n    account: DOMAIN\\\\Account\n    rights: modify\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify NTFS DACL",
        "description": "- netapp.ontap.na_ontap_ntfs_dacl",
        "body": "- name: Modify NTFS DACL\n  netapp.ontap.na_ontap_ntfs_dacl:\n    state: present\n    vserver: SVM1\n    security_descriptor: ansible_sd\n    access_type: full_control\n    account: DOMAIN\\\\Account\n    rights: modify\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Remove NTFS DACL",
        "description": "- netapp.ontap.na_ontap_ntfs_dacl",
        "body": "- name: Remove NTFS DACL\n  netapp.ontap.na_ontap_ntfs_dacl:\n    state: absent\n    vserver: SVM1\n    security_descriptor: ansible_sd\n    account: DOMAIN\\\\Account\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NTFS Security Descriptor",
        "description": "- netapp.ontap.na_ontap_ntfs_sd",
        "body": "- name: Create NTFS Security Descriptor\n  netapp.ontap.na_ontap_ntfs_sd:\n    state: present\n    vserver: SVM1\n    name: ansible_sd\n    owner: DOMAIN\\\\Account\n    group: DOMAIN\\\\Group\n    control_flags_raw: 0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify NTFS Security Descriptor",
        "description": "- netapp.ontap.na_ontap_ntfs_sd",
        "body": "- name: Modify NTFS Security Descriptor\n  netapp.ontap.na_ontap_ntfs_sd:\n    state: present\n    vserver: SVM1\n    name: ansible_sd\n    owner: DOMAIN\\\\Account\n    group: DOMAIN\\\\Group\n    control_flags_raw: 0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NTFS Security Descriptor",
        "description": "- netapp.ontap.na_ontap_ntfs_sd",
        "body": "- name: Delete NTFS Security Descriptor\n  netapp.ontap.na_ontap_ntfs_sd:\n    state: absent\n    vserver: SVM1\n    name: ansible_sd\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NTP server",
        "description": "- netapp.ontap.na_ontap_ntp",
        "body": "- name: Create NTP server\n  netapp.ontap.na_ontap_ntp:\n    state: present\n    version: auto\n    key_id: 1\n    server_name: '{{ server_name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NTP server",
        "description": "- netapp.ontap.na_ontap_ntp",
        "body": "- name: Delete NTP server\n  netapp.ontap.na_ontap_ntp:\n    state: absent\n    server_name: '{{ server_name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NTP key",
        "description": "- netapp.ontap.na_ontap_ntp_key",
        "body": "- name: Create NTP key\n  netapp.ontap.na_ontap_ntp_key:\n    state: present\n    digest_type: sha1\n    value: '{{ key_value }}'\n    id: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NTP key",
        "description": "- netapp.ontap.na_ontap_ntp_key",
        "body": "- name: Delete NTP key\n  netapp.ontap.na_ontap_ntp_key:\n    state: absent\n    id: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NVMe",
        "description": "- netapp.ontap.na_ontap_nvme",
        "body": "- name: Create NVMe\n  netapp.ontap.na_ontap_nvme:\n    state: present\n    status_admin: false\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify NVMe",
        "description": "- netapp.ontap.na_ontap_nvme",
        "body": "- name: Modify NVMe\n  netapp.ontap.na_ontap_nvme:\n    state: present\n    status_admin: true\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NVMe",
        "description": "- netapp.ontap.na_ontap_nvme",
        "body": "- name: Delete NVMe\n  netapp.ontap.na_ontap_nvme:\n    state: absent\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NVME Namespace",
        "description": "- netapp.ontap.na_ontap_nvme_namespace",
        "body": "- name: Create NVME Namespace\n  netapp.ontap.na_ontap_nvme_namespace:\n    state: present\n    ostype: linux\n    path: /vol/ansible/test\n    size: 5\n    size_unit: mb\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NVME Namespace ASA R2 system",
        "description": "- netapp.ontap.na_ontap_nvme_namespace",
        "body": "- name: Create NVME Namespace ASA R2 system\n  netapp.ontap.na_ontap_nvme_namespace:\n    state: present\n    ostype: linux\n    path: /vol/ansible/test\n    size: 5\n    size_unit: mb\n    provisioning_options:\n      count: 2\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify NVME Namespace",
        "description": "- netapp.ontap.na_ontap_nvme_namespace",
        "body": "- name: Modify NVME Namespace\n  netapp.ontap.na_ontap_nvme_namespace:\n    state: present\n    ostype: linux\n    path: /vol/ansible/test\n    size: 10\n    size_unit: mb\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NVME Namespace",
        "description": "- netapp.ontap.na_ontap_nvme_namespace",
        "body": "- name: Delete NVME Namespace\n  netapp.ontap.na_ontap_nvme_namespace:\n    state: absent\n    ostype: linux\n    path: /vol/ansible/test\n    size: 10\n    size_unit: mb\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create NVME Subsystem",
        "description": "- netapp.ontap.na_ontap_nvme_subsystem",
        "body": "- name: Create NVME Subsystem\n  netapp.ontap.na_ontap_nvme_subsystem:\n    state: present\n    subsystem: test_sub\n    vserver: test_dest\n    ostype: linux\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete NVME Subsystem",
        "description": "- netapp.ontap.na_ontap_nvme_subsystem",
        "body": "- name: Delete NVME Subsystem\n  netapp.ontap.na_ontap_nvme_subsystem:\n    state: absent\n    subsystem: test_sub\n    vserver: test_dest\n    skip_host_check: true\n    skip_mapped_check: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Associate NVME Subsystem host/map",
        "description": "- netapp.ontap.na_ontap_nvme_subsystem",
        "body": "- name: Associate NVME Subsystem host/map\n  netapp.ontap.na_ontap_nvme_subsystem:\n    state: present\n    subsystem: '{{ subsystem }}'\n    ostype: linux\n    hosts: nqn.1992-08.com.netapp:sn.3017cfc1e2ba11e89c55005056b36338:subsystem.ansible\n    paths: /vol/ansible/test,/vol/ansible/test1\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify NVME subsystem map",
        "description": "- netapp.ontap.na_ontap_nvme_subsystem",
        "body": "- name: Modify NVME subsystem map\n  netapp.ontap.na_ontap_nvme_subsystem:\n    state: present\n    subsystem: test_sub\n    vserver: test_dest\n    skip_host_check: true\n    skip_mapped_check: true\n    paths: /vol/ansible/test\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Object store Create",
        "description": "- netapp.ontap.na_ontap_object_store",
        "body": "- name: Object store Create\n  netapp.ontap.na_ontap_object_store:\n    state: present\n    name: ansible\n    provider_type: SGWS\n    server: abc\n    container: abc\n    access_key: s3.amazonaws.com\n    secret_password: abc\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Object store delete",
        "description": "- netapp.ontap.na_ontap_object_store",
        "body": "- name: Object store delete\n  netapp.ontap.na_ontap_object_store:\n    state: absent\n    name: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Assign specified total partitions to node cluster-01",
        "description": "- netapp.ontap.na_ontap_partitions",
        "body": "- name: Assign specified total partitions to node cluster-01\n  netapp.ontap.na_ontap_partitions:\n    node: cluster-01\n    partition_count: 56\n    disk_type: SSD\n    partition_type: data1\n    partition_method: root_data1_data2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Broadcast domain remove port",
        "description": "- netapp.ontap.na_ontap_ports",
        "body": "- name: Broadcast domain remove port\n  netapp.ontap.na_ontap_ports:\n    state: absent\n    names: test-vsim1:e0d-1,test-vsim1:e0d-2\n    resource_type: broadcast_domain\n    resource_name: ansible_domain\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "Broadcast domain add port",
        "description": "- netapp.ontap.na_ontap_ports",
        "body": "- name: Broadcast domain add port\n  netapp.ontap.na_ontap_ports:\n    state: present\n    names: test-vsim1:e0d-1,test-vsim1:e0d-2\n    resource_type: broadcast_domain\n    resource_name: ansible_domain\n    ipspace: Default\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "Portset remove port",
        "description": "- netapp.ontap.na_ontap_ports",
        "body": "- name: Portset remove port\n  netapp.ontap.na_ontap_ports:\n    state: absent\n    names: lif_2\n    resource_type: portset\n    resource_name: portset_1\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "Portset add port",
        "description": "- netapp.ontap.na_ontap_ports",
        "body": "- name: Portset add port\n  netapp.ontap.na_ontap_ports:\n    state: present\n    names: lif_2\n    resource_type: portset\n    resource_name: portset_1\n    portset_type: iscsi\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n"
    },
    {
        "label": "Create Portset",
        "description": "- netapp.ontap.na_ontap_portset",
        "body": "- name: Create Portset\n  netapp.ontap.na_ontap_portset:\n    state: present\n    vserver: vserver_name\n    name: portset_name\n    ports: a1\n    type: '{{ protocol type }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify ports in portset",
        "description": "- netapp.ontap.na_ontap_portset",
        "body": "- name: Modify ports in portset\n  netapp.ontap.na_ontap_portset:\n    state: present\n    vserver: vserver_name\n    name: portset_name\n    ports: a1,a2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete Portset",
        "description": "- netapp.ontap.na_ontap_portset",
        "body": "- name: Delete Portset\n  netapp.ontap.na_ontap_portset:\n    state: absent\n    vserver: vserver_name\n    name: portset_name\n    force: true\n    type: '{{ protocol type }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create publickey",
        "description": "- netapp.ontap.na_ontap_publickey",
        "body": "- name: Create publickey\n  netapp.ontap.na_ontap_publickey:\n    state: present\n    account: SampleUser\n    index: 0\n    public_key: '{{ netapp_publickey }}'\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete single publickey",
        "description": "- netapp.ontap.na_ontap_publickey",
        "body": "- name: Delete single publickey\n  netapp.ontap.na_ontap_publickey:\n    state: absent\n    account: SampleUser\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify single publickey",
        "description": "- netapp.ontap.na_ontap_publickey",
        "body": "- name: Modify single publickey\n  netapp.ontap.na_ontap_publickey:\n    state: present\n    account: SampleUser\n    comment: ssh key for XXXX\n    index: 0\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create adaptive qos policy group",
        "description": "- netapp.ontap.na_ontap_qos_adaptive_policy_group",
        "body": "- name: Create adaptive qos policy group\n  netapp.ontap.na_ontap_qos_adaptive_policy_group:\n    state: present\n    name: aq_policy_1\n    vserver: policy_vserver\n    absolute_min_iops: 70IOPS\n    expected_iops: 100IOPS/TB\n    peak_iops: 250IOPS/TB\n    peak_iops_allocation: allocated_space\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify adaptive qos policy group expected iops",
        "description": "- netapp.ontap.na_ontap_qos_adaptive_policy_group",
        "body": "- name: Modify adaptive qos policy group expected iops\n  netapp.ontap.na_ontap_qos_adaptive_policy_group:\n    state: present\n    name: aq_policy_1\n    vserver: policy_vserver\n    absolute_min_iops: 70IOPS\n    expected_iops: 125IOPS/TB\n    peak_iops: 250IOPS/TB\n    peak_iops_allocation: allocated_space\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify adaptive qos policy group peak iops allocation",
        "description": "- netapp.ontap.na_ontap_qos_adaptive_policy_group",
        "body": "- name: Modify adaptive qos policy group peak iops allocation\n  netapp.ontap.na_ontap_qos_adaptive_policy_group:\n    state: present\n    name: aq_policy_1\n    vserver: policy_vserver\n    absolute_min_iops: 70IOPS\n    expected_iops: 125IOPS/TB\n    peak_iops: 250IOPS/TB\n    peak_iops_allocation: used_space\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete qos policy group",
        "description": "- netapp.ontap.na_ontap_qos_adaptive_policy_group",
        "body": "- name: Delete qos policy group\n  netapp.ontap.na_ontap_qos_adaptive_policy_group:\n    state: absent\n    name: aq_policy_1\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create qos policy group in ZAPI.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Create qos policy group in ZAPI.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: policy_1\n    vserver: policy_vserver\n    max_throughput: 800KB/s,800iops\n    min_throughput: 100iops\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: never\n"
    },
    {
        "label": "Modify qos policy group max throughput in ZAPI.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Modify qos policy group max throughput in ZAPI.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: policy_1\n    vserver: policy_vserver\n    max_throughput: 900KB/s,800iops\n    min_throughput: 100iops\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: never\n"
    },
    {
        "label": "Delete qos policy group",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Delete qos policy group\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: absent\n    name: policy_1\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create qos policy group in REST.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Create qos policy group in REST.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: policy_1\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: always\n    fixed_qos_options:\n      max_throughput_iops: 800\n      max_throughput_mbps: 200\n      min_throughput_iops: 500\n      min_throughput_mbps: 100\n      capacity_shared: true\n"
    },
    {
        "label": "Modify qos policy max_throughput in REST.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Modify qos policy max_throughput in REST.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: policy_1\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: always\n    fixed_qos_options:\n      max_throughput_iops: 1000\n      max_throughput_mbps: 300\n"
    },
    {
        "label": "Create adaptive qos policy group in REST.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Create adaptive qos policy group in REST.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: adaptive_policy\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: always\n    adaptive_qos_options:\n      absolute_min_iops: 100\n      expected_iops: 200\n      peak_iops: 500\n"
    },
    {
        "label": "Modify adaptive qos policy group in REST.",
        "description": "- netapp.ontap.na_ontap_qos_policy_group",
        "body": "- name: Modify adaptive qos policy group in REST.\n  netapp.ontap.na_ontap_qos_policy_group:\n    state: present\n    name: adaptive_policy\n    vserver: policy_vserver\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    use_rest: always\n    adaptive_qos_options:\n      expected_iops_allocation: used_space\n      peak_iops_allocation: allocated_space\n"
    },
    {
        "label": "Create Qtrees.",
        "description": "- netapp.ontap.na_ontap_qtree",
        "body": "- name: Create Qtrees.\n  netapp.ontap.na_ontap_qtree:\n    state: present\n    name: ansibleQTree\n    flexvol_name: ansibleVolume\n    export_policy: policyName\n    security_style: mixed\n    oplocks: disabled\n    unix_permissions: 777\n    vserver: ansibleVServer\n    unix_user: user1\n    unix_group: group1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename Qtrees.",
        "description": "- netapp.ontap.na_ontap_qtree",
        "body": "- name: Rename Qtrees.\n  netapp.ontap.na_ontap_qtree:\n    state: present\n    from_name: ansibleQTree\n    name: ansibleQTree_rename\n    flexvol_name: ansibleVolume\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "modify Qtrees unix_permissions using string format.",
        "description": "- netapp.ontap.na_ontap_qtree",
        "body": "- name: modify Qtrees unix_permissions using string format.\n  netapp.ontap.na_ontap_qtree:\n    state: present\n    name: ansibleQTree_rename\n    flexvol_name: ansibleVolume\n    vserver: ansibleVServer\n    unix_permissions: sstrwxrwxrwx\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "delete Qtrees.",
        "description": "- netapp.ontap.na_ontap_qtree",
        "body": "- name: delete Qtrees.\n  netapp.ontap.na_ontap_qtree:\n    state: absent\n    name: ansibleQTree_rename\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create quota rule in ZAPI.",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Create quota rule in ZAPI.\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1\n    type: user\n    policy: ansible\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Resize quota",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Resize quota\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1\n    type: user\n    policy: ansible\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    activate_quota_on_change: resize\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Reinitialize quota",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Reinitialize quota\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1\n    type: user\n    policy: ansible\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    activate_quota_on_change: reinitialize\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify quota",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Modify quota\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1\n    type: user\n    policy: ansible\n    file_limit: 2\n    disk_limit: 3\n    threshold: 3\n    set_quota_status: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete quota",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Delete quota\n  netapp.ontap.na_ontap_quotas:\n    state: absent\n    vserver: ansible\n    volume: ansible\n    quota_target: /vol/ansible\n    type: user\n    policy: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add/Set quota rule for type user in REST.",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Add/Set quota rule for type user in REST.\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1,user2\n    qtree: qtree\n    type: user\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify quota reset file limit and modify disk limit.",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Modify quota reset file limit and modify disk limit.\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: user1,user2\n    qtree: qtree\n    type: user\n    file_limit: '-'\n    disk_limit: 100\n    set_quota_status: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add/Set quota rule for type group in REST.",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Add/Set quota rule for type group in REST.\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: group1\n    qtree: qtree\n    type: group\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Add/Set quota rule for type qtree in REST.",
        "description": "- netapp.ontap.na_ontap_quotas",
        "body": "- name: Add/Set quota rule for type qtree in REST.\n  netapp.ontap.na_ontap_quotas:\n    state: present\n    vserver: ansible\n    volume: ansible\n    quota_target: qtree1\n    type: tree\n    file_limit: 2\n    disk_limit: 3\n    set_quota_status: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create quota policy",
        "description": "- netapp.ontap.na_ontap_quota_policy",
        "body": "- name: Create quota policy\n  netapp.ontap.na_ontap_quota_policy:\n    state: present\n    vserver: SVM1\n    name: ansible_policy\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Rename quota policy",
        "description": "- netapp.ontap.na_ontap_quota_policy",
        "body": "- name: Rename quota policy\n  netapp.ontap.na_ontap_quota_policy:\n    state: present\n    vserver: SVM1\n    name: new_ansible\n    from_name: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete quota policy",
        "description": "- netapp.ontap.na_ontap_quota_policy",
        "body": "- name: Delete quota policy\n  netapp.ontap.na_ontap_quota_policy:\n    state: absent\n    vserver: SVM1\n    name: ansible_policy\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Run ONTAP REST CLI command",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Run ONTAP REST CLI command\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: version\n    verb: GET\n"
    },
    {
        "label": "Run volume show command with a filter to only return volumes matching the provided vserver and policy values.",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Run volume show command with a filter to only return volumes matching the\n    provided vserver and policy values.\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: volume\n    verb: GET\n    params:\n      vserver: vs0\n      policy: default\n      fields: vserver,volume,policy\n  register: vs0_volumes\n"
    },
    {
        "label": "Run security login motd modify command",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Run security login motd modify command\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: security/login/motd\n    verb: PATCH\n    params:\n      vserver: ansibleSVM\n    body:\n      message: test\n"
    },
    {
        "label": "Set option",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Set option\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: options\n    verb: PATCH\n    params:\n      option_name: lldp.enable\n    body:\n      option_value: 'on'\n"
    },
    {
        "label": "Run security certificate delete command",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Run security certificate delete command\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: security/certificate\n    verb: DELETE\n    body:\n      vserver: vs1\n      common-name: cluster01\n      ca: cluster01\n      type: server\n      serial: 17EBE9D26GGE91B9\n"
    },
    {
        "label": "Run volume create command",
        "description": "- netapp.ontap.na_ontap_rest_cli",
        "body": "- name: Run volume create command\n  netapp.ontap.na_ontap_rest_cli:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: volume\n    verb: POST\n    body:\n      vserver: vs1\n      volume: my_test_volume\n      size: 10g\n      aggregate: aggr1_node1\n      policy: default\n      type: RW\n"
    },
    {
        "label": "Run ONTAP gather facts for vserver info",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather facts for vserver info\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - svm/svms\n"
    },
    {
        "label": "Run ONTAP gather facts for aggregate info and volume info",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather facts for aggregate info and volume info\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - storage/aggregates\n    - storage/volumes\n"
    },
    {
        "label": "Run ONTAP gather facts for aggregate info and volume info with fields section",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather facts for aggregate info and volume info with fields section\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    fields:\n    - '*'\n    validate_certs: false\n    gather_subset:\n    - storage/aggregates\n    - storage/volumes\n"
    },
    {
        "label": "Run ONTAP gather facts for aggregate info with specified fields",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather facts for aggregate info with specified fields\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    fields:\n    - uuid\n    - name\n    - node\n    validate_certs: false\n    gather_subset:\n    - storage/aggregates\n    parameters:\n      recommend: true\n"
    },
    {
        "label": "Get Snapshot info (owning_resource example)",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Get Snapshot info (owning_resource example)\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    fields:\n    - '*'\n    validate_certs: false\n    gather_subset:\n    - storage/volumes/snapshots\n    owning_resource:\n      volume_name: volume_name\n      svm_name: svm_name\n"
    },
    {
        "label": "Run ONTAP gather facts for volume info with query on name and state",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather facts for volume info with query on name and state\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - storage/volumes\n    parameters:\n      name: ansible*\n      state: online\n"
    },
    {
        "label": "Run ONTAP gather fact to get DACLs",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run ONTAP gather fact to get DACLs\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - file_directory_security\n    parameters:\n      vserver: svm1\n      path: /vol1/qtree1\n    use_python_keys: true\n"
    },
    {
        "label": "Get ip network interface info",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Get ip network interface info\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - ip_interfaces_info\n    parameters:\n      location.failover: home_node_only\n      location.node.name: ontap_cluster\n      service_policy.name: default-data-files\n"
    },
    {
        "label": "Get aggregate info",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Get aggregate info\n  netapp.ontap.na_ontap_rest_info:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    validate_certs: false\n    gather_subset:\n    - aggregate_info\n    parameters:\n      node.name: ontap_cluster\n      block_storage.primary.raid_type: raid_dp\n"
    },
    {
        "label": "Run demo subset using custom vsadmin role",
        "description": "- netapp.ontap.na_ontap_rest_info",
        "body": "- name: Run demo subset using custom vsadmin role\n  netapp.ontap.na_ontap_rest_info:\n    gather_subset:\n    - demo\n    force_ontap_version: 9.8\n    ignore_api_errors:\n    - not authorized for that command\n"
    },
    {
        "label": "Create S3 bucket",
        "description": "- netapp.ontap.na_ontap_s3_buckets",
        "body": "- name: Create S3 bucket\n  netapp.ontap.na_ontap_s3_buckets:\n    state: present\n    name: carchi-test-bucket\n    comment: carchi8py was here\n    size: 838860800\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create S3 bucket with a policy",
        "description": "- netapp.ontap.na_ontap_s3_buckets",
        "body": "- name: Create S3 bucket with a policy\n  netapp.ontap.na_ontap_s3_buckets:\n    state: present\n    name: carchi-test-bucket\n    comment: carchi8py was here\n    size: 838860800\n    policy:\n      statements:\n      - sid: FullAccessToUser1\n        resources:\n        - bucket1\n        - bucket1/*\n        actions:\n        - GetObject\n        - PutObject\n        - DeleteObject\n        - ListBucket\n        effect: allow\n        conditions:\n        - operator: ip_address\n          max_keys:\n          - 1000\n          delimiters:\n          - /\n          source_ips:\n          - 1.1.1.1\n          - 1.2.2.0/24\n          prefixes:\n          - prex\n          usernames:\n          - user1\n        principals:\n        - user1\n        - group/grp1\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Delete S3 bucket",
        "description": "- netapp.ontap.na_ontap_s3_buckets",
        "body": "- name: Delete S3 bucket\n  netapp.ontap.na_ontap_s3_buckets:\n    state: absent\n    name: carchi-test-bucket\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create and modify a S3 Group",
        "description": "- netapp.ontap.na_ontap_s3_groups",
        "body": "- name: Create and modify a S3 Group\n  netapp.ontap.na_ontap_s3_groups:\n    state: present\n    name: dev-group\n    comment: group for devs\n    vserver: ansibleSVM\n    users:\n    - name: carchi8py\n    - name: carchi8py2\n    policies:\n    - name: allow_policy\n    - name: deny_policy\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Delete a S3 Group",
        "description": "- netapp.ontap.na_ontap_s3_groups",
        "body": "- name: Delete a S3 Group\n  netapp.ontap.na_ontap_s3_groups:\n    state: absent\n    name: dev-group\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create and modify a S3 policy",
        "description": "- netapp.ontap.na_ontap_s3_policies",
        "body": "- name: Create and modify a S3 policy\n  netapp.ontap.na_ontap_s3_policies:\n    state: present\n    name: carchi-s3-policy\n    comment: carchi8py was here\n    vserver: ansibleSVM\n    statements:\n    - sid: 1\n      resources:\n      - bucket1\n      - bucket1/*\n      actions:\n      - '*'\n      effect: allow\n    - sid: 2\n      resources:\n      - bucket2\n      - bucket2/*\n      actions:\n      - '*'\n      effect: allow\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Delete S3 policy",
        "description": "- netapp.ontap.na_ontap_s3_policies",
        "body": "- name: Delete S3 policy\n  netapp.ontap.na_ontap_s3_policies:\n    state: absent\n    name: carchi-s3-policy\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create or modify s3 service",
        "description": "- netapp.ontap.na_ontap_s3_services",
        "body": "- name: Create or modify s3 service\n  netapp.ontap.na_ontap_s3_services:\n    state: present\n    name: carchi-test\n    vserver: ansibleSVM\n    comment: not enabled\n    enabled: false\n    certificate_name: ansibleSVM_16E1C1284D889609\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create or modify s3 service with https",
        "description": "- netapp.ontap.na_ontap_s3_services",
        "body": "- name: Create or modify s3 service with https\n  netapp.ontap.na_ontap_s3_services:\n    state: present\n    name: carchi-test\n    vserver: ansibleSVM\n    comment: not enabled\n    enabled: true\n    is_https_enabled: true\n    port: 80\n    certificate_name: ansibleSVM_16E1C1284D889609\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Delete s3 service",
        "description": "- netapp.ontap.na_ontap_s3_services",
        "body": "- name: Delete s3 service\n  netapp.ontap.na_ontap_s3_services:\n    state: absent\n    name: carchi-test\n    vserver: ansibleSVM\n    certificate_name: ansibleSVM_16E1C1284D889609\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Create or modify s3 user",
        "description": "- netapp.ontap.na_ontap_s3_users",
        "body": "- name: Create or modify s3 user\n  netapp.ontap.na_ontap_s3_users:\n    state: present\n    name: carchi8py\n    vserver: ansibleSVM\n    comment: not enabled\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "Delete s3 user",
        "description": "- netapp.ontap.na_ontap_s3_users",
        "body": "- name: Delete s3 user\n  netapp.ontap.na_ontap_s3_users:\n    state: absent\n    name: carchi8py\n    vserver: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    use_rest: always\n"
    },
    {
        "label": "install certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: install certificate\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_common_name }}'\n    name: '{{ ontap_cert_name }}'\n    public_certificate: '{{ ssl_certificate }}'\n    type: client_ca\n    svm: '{{ vserver }}'\n"
    },
    {
        "label": "install certificate in cluster vserver.",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: install certificate in cluster vserver.\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_common_name }}'\n    name: '{{ ontap_cert_name }}'\n    public_certificate: '{{ ssl_certificate }}'\n    type: client_ca\n"
    },
    {
        "label": "create certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: create certificate\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_root_common_name }}'\n    name: '{{ ontap_cert_name }}'\n    type: root_ca\n    svm: '{{ vserver }}'\n    expiry_time: P365DT\n"
    },
    {
        "label": "sign certificate using newly create certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: sign certificate using newly create certificate\n  tags: sign_request\n  netapp.ontap.na_ontap_security_certificates:\n    name: '{{ ontap_cert_name }}'\n    svm: '{{ vserver }}'\n    signing_request: '-----BEGIN CERTIFICATE REQUEST-----\n\n      MIIChDCCAWwCAQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRIwEAYDVQQH\n\n      DAlTdW5ueXZhbGUxDzANBgNVBAoMBk5ldEFwcDCCASIwDQYJKoZIhvcNAQEBBQAD\n\n      ggEPADCCAQoCggEBALgXCj6Si/I4xLdV7wjWYTbt8jY20fQOjk/4E7yBT1vFBflE\n\n      ks6YDc6dhC2G18cnoj9E3DiR8lIHPoAlFB/VmBNDev3GZkbFlrbV7qYmf8OEx2H2\n\n      tAefgSP0jLmCHCN1yyhJoCG6FsAiD3tf6yoyFF6qS9ureGL0tCJJ/osx64WzUz+Q\n\n      EN8lx7VSxriEFMSjreXZDhUFaCdIYKKRENuEWyYvdy5cbBmczhuM8EP6peOVv5Hm\n\n      BJzPUDkq7oTtEHmttpATq2Y92qzNzETO0bXN5X/93AWri8/yEXdX+HEw1C/omtsE\n\n      jGsCXrCrIJ+DgUdT/GHNdBWlXl/cWGtEgEQ4vrUCAwEAAaAAMA0GCSqGSIb3DQEB\n\n      CwUAA4IBAQBjZNoQgr/JDm1T8zyRhLkl3zw4a16qKNu/MS7prqZHLVQgrptHRegU\n\n      Hbz11XoHfVOdbyuvtzEe95QsDd6FYCZ4qzZRF3se4IjMeqwdQZ5WP0/GFiwM8Uln\n\n      /0TCWjt759XMeUX7+wgOg5NRjJ660eWMXzu/UJf+vZO0Q2FiPIr13JvvY3TjT+9J\n\n      UUtK4r9PaUuOPN2YL9IQqSD3goh8302Qr3nBXUgjeUGLkgfUM5S39apund2hyTX2\n\n      JCLQsKr88pwU9iDho2tHLv/2QgLwNZLPu8V+7IGu6G4vB28lN4Uy7xbhxFOKtyWu\n\n      fK4sEdTw3B/aDN0tB8MHFdPYycNZsEac\n\n      -----END CERTIFICATE REQUEST-----\n\n      '\n    expiry_time: P180DT\n"
    },
    {
        "label": "delete certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: delete certificate\n  netapp.ontap.na_ontap_security_certificates:\n    state: absent\n    name: '{{ ontap_cert_name }}'\n    svm: '{{ vserver }}'\n"
    },
    {
        "label": "install certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: install certificate\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_common_name }}'\n    public_certificate: '{{ ssl_certificate }}'\n    type: client_ca\n    svm: '{{ vserver }}'\n"
    },
    {
        "label": "create certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: create certificate\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_root_common_name }}'\n    type: root_ca\n    svm: '{{ vserver }}'\n    expiry_time: P365DT\n"
    },
    {
        "label": "sign certificate using newly create certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: sign certificate using newly create certificate\n  tags: sign_request\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_root_common_name }}'\n    type: root_ca\n    svm: '{{ vserver }}'\n    signing_request: '-----BEGIN CERTIFICATE REQUEST-----\n\n      MIIChDCCAWwCAQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRIwEAYDVQQH\n\n      DAlTdW5ueXZhbGUxDzANBgNVBAoMBk5ldEFwcDCCASIwDQYJKoZIhvcNAQEBBQAD\n\n      ggEPADCCAQoCggEBALgXCj6Si/I4xLdV7wjWYTbt8jY20fQOjk/4E7yBT1vFBflE\n\n      ks6YDc6dhC2G18cnoj9E3DiR8lIHPoAlFB/VmBNDev3GZkbFlrbV7qYmf8OEx2H2\n\n      tAefgSP0jLmCHCN1yyhJoCG6FsAiD3tf6yoyFF6qS9ureGL0tCJJ/osx64WzUz+Q\n\n      EN8lx7VSxriEFMSjreXZDhUFaCdIYKKRENuEWyYvdy5cbBmczhuM8EP6peOVv5Hm\n\n      BJzPUDkq7oTtEHmttpATq2Y92qzNzETO0bXN5X/93AWri8/yEXdX+HEw1C/omtsE\n\n      jGsCXrCrIJ+DgUdT/GHNdBWlXl/cWGtEgEQ4vrUCAwEAAaAAMA0GCSqGSIb3DQEB\n\n      CwUAA4IBAQBjZNoQgr/JDm1T8zyRhLkl3zw4a16qKNu/MS7prqZHLVQgrptHRegU\n\n      Hbz11XoHfVOdbyuvtzEe95QsDd6FYCZ4qzZRF3se4IjMeqwdQZ5WP0/GFiwM8Uln\n\n      /0TCWjt759XMeUX7+wgOg5NRjJ660eWMXzu/UJf+vZO0Q2FiPIr13JvvY3TjT+9J\n\n      UUtK4r9PaUuOPN2YL9IQqSD3goh8302Qr3nBXUgjeUGLkgfUM5S39apund2hyTX2\n\n      JCLQsKr88pwU9iDho2tHLv/2QgLwNZLPu8V+7IGu6G4vB28lN4Uy7xbhxFOKtyWu\n\n      fK4sEdTw3B/aDN0tB8MHFdPYycNZsEac\n\n      -----END CERTIFICATE REQUEST-----\n\n      '\n    expiry_time: P180DT\n"
    },
    {
        "label": "delete certificate",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: delete certificate\n  netapp.ontap.na_ontap_security_certificates:\n    state: absent\n    common_name: '{{ ontap_cert_root_common_name }}'\n    type: root_ca\n    name: '{{ ontap_cert_name }}'\n    svm: '{{ vserver }}'\n"
    },
    {
        "label": "install certificate - server certificate with chain of intermediate certificates",
        "description": "- netapp.ontap.na_ontap_security_certificates",
        "body": "- name: install certificate - server certificate with chain of intermediate certificates\n  netapp.ontap.na_ontap_security_certificates:\n    common_name: '{{ ontap_cert_common_name }}'\n    public_certificate: '{{ ssl_certificate }}'\n    type: server\n    svm: '{{ vserver }}'\n    private_key: '-----BEGIN CERTIFICATE-----\n\n      Private Key\n\n      -----END CERTIFICATE-----'\n    intermediat_certificates:\n    - '-----BEGIN CERTIFICATE-----\n\n      Intermediate certificate1\n\n      -----END CERTIFICATE-----'\n    - '-----BEGIN CERTIFICATE-----\n\n      Intermediate certificate2\n\n      -----END CERTIFICATE-----'\n    - '-----BEGIN CERTIFICATE-----\n\n      Root certificate\n\n      -----END CERTIFICATE-----'\n"
    },
    {
        "label": "Modify SSL Security Config - ZAPI",
        "description": "- netapp.ontap.na_ontap_security_config",
        "body": "- name: Modify SSL Security Config - ZAPI\n  netapp.ontap.na_ontap_security_config:\n    name: ssl\n    is_fips_enabled: false\n    supported_ciphers: ALL:!LOW:!aNULL:!EXP:!eNULL:!3DES:!RC4:!SHA1\n    supported_protocols:\n    - TLSv1.2\n    - TLSv1.1\n    - TLSv1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    ontapi: '{{ ontap_info.ontap_info.ontap_version }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify SSL Security Config - REST",
        "description": "- netapp.ontap.na_ontap_security_config",
        "body": "- name: Modify SSL Security Config - REST\n  netapp.ontap.na_ontap_security_config:\n    is_fips_enabled: false\n    supported_protocols:\n    - TLSv1.2\n    - TLSv1.1\n    - TLSv1\n    supported_cipher_suites:\n    - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    ontapi: '{{ ontap_info.ontap_info.ontap_version }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Add IPsec CA certificate to svm.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_ca_certificate",
        "body": "- name: Add IPsec CA certificate to svm.\n  netapp.ontap.na_ontap_security_ipsec_ca_certificate:\n    name: cert1\n    svm: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Delete IPsec CA certificate in svm.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_ca_certificate",
        "body": "- name: Delete IPsec CA certificate in svm.\n  netapp.ontap.na_ontap_security_ipsec_ca_certificate:\n    name: cert1\n    svm: ansibleSVM\n    state: absent\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Add IPsec CA certificate to cluster.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_ca_certificate",
        "body": "- name: Add IPsec CA certificate to cluster.\n  netapp.ontap.na_ontap_security_ipsec_ca_certificate:\n    name: cert2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Delete IPsec CA certificate from cluster.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_ca_certificate",
        "body": "- name: Delete IPsec CA certificate from cluster.\n  netapp.ontap.na_ontap_security_ipsec_ca_certificate:\n    name: cert2\n    state: absent\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Enable IPsec config and set replay_window.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_config",
        "body": "- name: Enable IPsec config and set replay_window.\n  netapp.ontap.na_ontap_security_ipsec_config:\n    enabled: true\n    replay_window: 64\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Disable IPsec config.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_config",
        "body": "- name: Disable IPsec config.\n  netapp.ontap.na_ontap_security_ipsec_config:\n    enabled: false\n    replay_window: 64\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create security IPsec policy with pre-shared Keys.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Create security IPsec policy with pre-shared Keys.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_psk\n    ipspace: Default\n    svm: ansibleSVM\n    authentication_method: psk\n    secret_key: '{{ secret_key }}'\n    action: esp_transport\n    local_endpoint:\n      address: 10.23.43.23\n      netmask: 24\n      port: 201\n    remote_endpoint:\n      address: 10.23.43.30\n      netmask: 24\n      port: 205\n    protocol: tcp\n    enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create security IPsec policy with certificates.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Create security IPsec policy with certificates.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_pki\n    ipspace: Default\n    svm: ansibleSVM\n    authentication_method: pki\n    certificate: '{{ cert_name }}'\n    action: esp_transport\n    local_endpoint:\n      address: 10.23.43.23\n      netmask: 24\n      port: 201\n    remote_endpoint:\n      address: 10.23.43.30\n      netmask: 24\n      port: 205\n    protocol: tcp\n    enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create security IPsec policy without psk or certificates.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Create security IPsec policy without psk or certificates.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_none\n    ipspace: Default\n    svm: ansibleSVM\n    action: bypass\n    local_endpoint:\n      address: 10.23.43.23\n      netmask: 24\n      port: 201\n    remote_endpoint:\n      address: 10.23.43.30\n      netmask: 24\n      port: 205\n    protocol: tcp\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify security IPsec policy local, remote end_point.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Modify security IPsec policy local, remote end_point.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_pki\n    ipspace: Default\n    svm: ansibleSVM\n    authentication_method: pki\n    certificate: '{{ cert_name }}'\n    action: esp_transport\n    local_endpoint:\n      address: 10.23.43.50\n      netmask: 24\n      port: 201\n    remote_endpoint:\n      address: 10.23.43.60\n      netmask: 24\n      port: 205\n    protocol: tcp\n    enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify security IPsec protocol, enable options.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Modify security IPsec protocol, enable options.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_pki\n    ipspace: Default\n    svm: ansibleSVM\n    authentication_method: pki\n    certificate: '{{ cert_name }}'\n    action: esp_transport\n    local_endpoint:\n      address: 10.23.43.50\n      netmask: 24\n      port: 201\n    remote_endpoint:\n      address: 10.23.43.60\n      netmask: 24\n      port: 205\n    protocol: udp\n    enabled: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Delete security IPsec policy.",
        "description": "- netapp.ontap.na_ontap_security_ipsec_policy",
        "body": "- name: Delete security IPsec policy.\n  netapp.ontap.na_ontap_security_ipsec_policy:\n    name: ipsec_policy_pki\n    svm: ansibleSVM\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Delete Key Manager",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Delete Key Manager\n  netapp.ontap.na_ontap_security_key_manager:\n    state: absent\n"
    },
    {
        "label": "Add Key Manager - ZAPI",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Add Key Manager - ZAPI\n  netapp.ontap.na_ontap_security_key_manager:\n    ip_address: 0.0.0.0\n"
    },
    {
        "label": "Add/Modify external Key Manager - REST",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Add/Modify external Key Manager - REST\n  netapp.ontap.na_ontap_security_key_manager:\n    state: present\n    external:\n      servers: 10.10.10.10:5696\n      client_certificate: kmip_client\n      server_ca_certificates: kmip_ca\n    vserver: '{{ vserver | default(omit) }}'\n"
    },
    {
        "label": "Add/Modify external Key Manager - REST",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Add/Modify external Key Manager - REST\n  netapp.ontap.na_ontap_security_key_manager:\n    state: present\n    external:\n      servers: 10.10.10.10:5696,10.10.10.10:5697,10.10.10.11:5696\n      client_certificate: kmip_client\n      server_ca_certificates: kmip_ca\n    vserver: '{{ vserver | default(omit) }}'\n"
    },
    {
        "label": "Add onboard Key Manager",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Add onboard Key Manager\n  netapp.ontap.na_ontap_security_key_manager:\n    state: present\n    onboard:\n      passphrase: hello, le soleil brille, brille, brille!\n"
    },
    {
        "label": "Change passphrase for onboard Key Manager",
        "description": "- netapp.ontap.na_ontap_security_key_manager",
        "body": "- name: Change passphrase for onboard Key Manager\n  netapp.ontap.na_ontap_security_key_manager:\n    state: present\n    onboard:\n      from_passphrase: hello, le soleil brille, brille, brille!\n      passphrase: hello, le soleil brille, brille, brille! - 2\n      synchronize: true\n"
    },
    {
        "label": "Modify SSH algorithms",
        "description": "- netapp.ontap.na_ontap_security_ssh",
        "body": "- name: Modify SSH algorithms\n  netapp.ontap.na_ontap_security_ssh:\n    vserver: vserverName\n    ciphers:\n    - aes256_ctr\n    - aes192_ctr\n    key_exchange_algorithms:\n    - diffie_hellman_group_exchange_sha256\n    mac_algorithms:\n    - hmac_sha1\n    max_authentication_retry_count: 6\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify SSH algorithms at cluster level",
        "description": "- netapp.ontap.na_ontap_security_ssh",
        "body": "- name: Modify SSH algorithms at cluster level\n  netapp.ontap.na_ontap_security_ssh:\n    vserver: null\n    ciphers:\n    - aes256_ctr\n    - aes192_ctr\n    key_exchange_algorithms:\n    - diffie_hellman_group_exchange_sha256\n    mac_algorithms:\n    - hmac_sha1\n    max_authentication_retry_count: 6\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify SSH algorithms at cluster level",
        "description": "- netapp.ontap.na_ontap_security_ssh",
        "body": "- name: Modify SSH algorithms at cluster level\n  netapp.ontap.na_ontap_security_ssh:\n    ciphers:\n    - aes256_ctr\n    - aes192_ctr\n    key_exchange_algorithms:\n    - diffie_hellman_group_exchange_sha256\n    mac_algorithms:\n    - hmac_sha1\n    max_authentication_retry_count: 6\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create service policy",
        "description": "- netapp.ontap.na_ontap_service_policy",
        "body": "- name: Create service policy\n  netapp.ontap.na_ontap_service_policy:\n    state: present\n    name: '{{ service_policy_name }}'\n    services:\n    - data_core\n    - data_nfs\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete single service policy",
        "description": "- netapp.ontap.na_ontap_service_policy",
        "body": "- name: Delete single service policy\n  netapp.ontap.na_ontap_service_policy:\n    state: absent\n    name: '{{ service_policy_name }}'\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify single service policy",
        "description": "- netapp.ontap.na_ontap_service_policy",
        "body": "- name: Modify single service policy\n  netapp.ontap.na_ontap_service_policy:\n    state: present\n    name: '{{ service_policy_name }}'\n    services:\n    - data_core\n    - data_nfs\n    - data_cifs\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify service policy, remove services",
        "description": "- netapp.ontap.na_ontap_service_policy",
        "body": "- name: Modify service policy, remove services\n  netapp.ontap.na_ontap_service_policy:\n    state: present\n    name: '{{ service_policy_name }}'\n    services:\n    - no_service\n    vserver: '{{ vserver }}'\n"
    },
    {
        "label": "Modify service policy at cluster level",
        "description": "- netapp.ontap.na_ontap_service_policy",
        "body": "- name: Modify service policy at cluster level\n  netapp.ontap.na_ontap_service_policy:\n    state: present\n    name: '{{ service_policy_name }}'\n    ipspace: ansibleIpspace\n    scope: cluster\n    services:\n    - management_core\n    - management_autosupport\n    - management_ems\n"
    },
    {
        "label": "Modify Service Processor Network, enable dhcp.",
        "description": "- netapp.ontap.na_ontap_service_processor_network",
        "body": "- name: Modify Service Processor Network, enable dhcp.\n  netapp.ontap.na_ontap_service_processor_network:\n    state: present\n    address_type: ipv4\n    is_enabled: true\n    dhcp: v4\n    node: '{{ netapp_node }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n"
    },
    {
        "label": "Set node compliance clock",
        "description": "- netapp.ontap.na_ontap_snaplock_clock",
        "body": "- name: Set node compliance clock\n  netapp.ontap.na_ontap_snaplock_clock:\n    node: cluster1-01\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create ONTAP/ONTAP SnapMirror",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create ONTAP/ONTAP SnapMirror\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_volume: test_src\n    destination_volume: test_dest\n    source_vserver: ansible_src\n    destination_vserver: ansible_dest\n    schedule: hourly\n    policy: MirrorAllSnapshots\n    max_transfer_rate: 1000\n    initialize: false\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Create ONTAP/ONTAP vserver SnapMirror",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create ONTAP/ONTAP vserver SnapMirror\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_vserver: ansible_src\n    destination_vserver: ansible_dest\n    identity_preserve: true\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Inititalize ONTAP/ONTAP SnapMirror",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Inititalize ONTAP/ONTAP SnapMirror\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_path: ansible:test\n    destination_path: ansible:dest\n    relationship_state: active\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Delete SnapMirror",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Delete SnapMirror\n  netapp.ontap.na_ontap_snapmirror:\n    state: absent\n    destination_path: <path>\n    relationship_info_only: true\n    source_hostname: '{{ source_hostname }}'\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Break SnapMirror",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Break SnapMirror\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    relationship_state: broken\n    destination_path: <path>\n    source_hostname: '{{ source_hostname }}'\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Restore SnapMirror volume using location (Idempotency)",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Restore SnapMirror volume using location (Idempotency)\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_path: <path>\n    destination_path: <path>\n    relationship_type: restore\n    source_snapshot: '{{ snapshot }}'\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Set schedule to NULL",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Set schedule to NULL\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    destination_path: <path>\n    schedule: ''\n    hostname: '{{ destination_cluster_hostname }}'\n    username: '{{ destination_cluster_username }}'\n    password: '{{ destination_cluster_password }}'\n"
    },
    {
        "label": "Create SnapMirror from ElementSW to ONTAP",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create SnapMirror from ElementSW to ONTAP\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    connection_type: elementsw_ontap\n    source_path: 10.10.10.10:/lun/300\n    destination_path: ansible_test:ansible_dest_vol\n    schedule: hourly\n    policy: MirrorLatest\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    source_hostname: ' {{ Element_cluster_mvip }}'\n    source_username: '{{ Element_cluster_username }}'\n    source_password: '{{ Element_cluster_password }}'\n"
    },
    {
        "label": "Create SnapMirror from ONTAP to ElementSW",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create SnapMirror from ONTAP to ElementSW\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    connection_type: ontap_elementsw\n    destination_path: 10.10.10.10:/lun/300\n    source_path: ansible_test:ansible_dest_vol\n    policy: MirrorLatest\n    hostname: '{{ Element_cluster_mvip }}'\n    username: '{{ Element_cluster_username }}'\n    password: '{{ Element_cluster_password }}'\n    source_hostname: ' {{ netapp_hostname }}'\n    source_username: '{{ netapp_username }}'\n    source_password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create SnapMirror relationship (create destination volume)",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create SnapMirror relationship (create destination volume)\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_endpoint:\n      cluster: '{{ _source_cluster }}'\n      path: '{{ source_vserver + '':'' + source_volume }}'\n    destination_endpoint:\n      cluster: '{{ _destination_cluster }}'\n      path: '{{ destination_vserver_VOLDP + '':'' + destination_volume }}'\n    create_destination:\n      enabled: true\n    hostname: '{{ destination_hostname }}'\n    username: '{{ username }}'\n    password: '{{ password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create SnapMirror relationship - SVM DR (creating and peering destination svm)",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Create SnapMirror relationship - SVM DR (creating and peering destination\n    svm)\n  tags: create_svmdr\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_endpoint: null\n    cluster: '{{ _source_cluster }}'\n    path: '{{ source_vserver + '':'' }}'\n    destination_endpoint:\n      cluster: '{{ _destination_cluster }}'\n      path: '{{ destination_vserver_SVMDR + '':'' }}'\n    create_destination:\n      enabled: true\n    hostname: '{{ destination_hostname }}'\n    username: '{{ username }}'\n    password: '{{ password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Resync SnapMirror relationship - SVM DR",
        "description": "- netapp.ontap.na_ontap_snapmirror",
        "body": "- name: Resync SnapMirror relationship - SVM DR\n  tags: resync_svmdr\n  netapp.ontap.na_ontap_snapmirror:\n    state: present\n    source_endpoint: null\n    cluster: '{{ _source_cluster }}'\n    path: '{{ source_vserver + '':'' }}'\n    destination_endpoint:\n      cluster: '{{ _destination_cluster }}'\n      path: '{{ destination_vserver_SVMDR + '':'' }}'\n    create_destination:\n      enabled: true\n    relationship_state: active\n    quick_resync: true\n    hostname: '{{ destination_hostname }}'\n    username: '{{ username }}'\n    password: '{{ password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create SnapMirror policy",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Create SnapMirror policy\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: mirror_vault\n    comment: created by ansible\n    transfer_schedule: daily\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify SnapMirror policy",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Modify SnapMirror policy\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: async_mirror\n    transfer_priority: low\n    transfer_schedule: weekly\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create SnapMirror policy with basic rules",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Create SnapMirror policy with basic rules\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: async_mirror\n    snapmirror_label:\n    - daily\n    - weekly\n    - monthly\n    keep:\n    - 7\n    - 5\n    - 12\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create SnapMirror policy with rules and schedules (no schedule for daily rule)",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Create SnapMirror policy with rules and schedules (no schedule for daily rule)\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: mirror_vault\n    snapmirror_label:\n    - daily\n    - weekly\n    - monthly\n    keep:\n    - 7\n    - 5\n    - 12\n    schedule:\n    - ''\n    - weekly\n    - monthly\n    prefix:\n    - ''\n    - ''\n    - monthly_mv\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify SnapMirror policy with rules, remove existing schedules and prefixes",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Modify SnapMirror policy with rules, remove existing schedules and prefixes\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: mirror_vault\n    snapmirror_label:\n    - daily\n    - weekly\n    - monthly\n    keep:\n    - 7\n    - 5\n    - 12\n    schedule:\n    - ''\n    - ''\n    - ''\n    prefix:\n    - ''\n    - ''\n    - ''\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify SnapMirror policy, delete all rules (excludes builtin rules)",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Modify SnapMirror policy, delete all rules (excludes builtin rules)\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: present\n    vserver: SVM1\n    policy_name: ansible_policy\n    policy_type: mirror_vault\n    snapmirror_label: []\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Delete SnapMirror policy",
        "description": "- netapp.ontap.na_ontap_snapmirror_policy",
        "body": "- name: Delete SnapMirror policy\n  netapp.ontap.na_ontap_snapmirror_policy:\n    state: absent\n    vserver: SVM1\n    policy_type: async_mirror\n    policy_name: ansible_policy\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Create SnapShot",
        "description": "- netapp.ontap.na_ontap_snapshot",
        "body": "- name: Create SnapShot\n  netapp.ontap.na_ontap_snapshot:\n    state: present\n    snapshot: '{{ snapshot_name }}'\n    volume: '{{ vol_name }}'\n    comment: sample comment\n    expiry_time: '2022-02-04T14:00:00-05:00'\n    vserver: '{{ vserver name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete SnapShot",
        "description": "- netapp.ontap.na_ontap_snapshot",
        "body": "- name: Delete SnapShot\n  netapp.ontap.na_ontap_snapshot:\n    state: absent\n    snapshot: '{{ snapshot_name }}'\n    volume: '{{ vol_name }}'\n    vserver: '{{ vserver_name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify SnapShot",
        "description": "- netapp.ontap.na_ontap_snapshot",
        "body": "- name: Modify SnapShot\n  netapp.ontap.na_ontap_snapshot:\n    state: present\n    snapshot: '{{ snapshot_name }}'\n    comment: New comments are great\n    volume: '{{ vol_name }}'\n    vserver: '{{ vserver_name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Snapshot policy",
        "description": "- netapp.ontap.na_ontap_snapshot_policy",
        "body": "- name: Create Snapshot policy\n  netapp.ontap.na_ontap_snapshot_policy:\n    state: present\n    name: ansible2\n    schedule: hourly\n    prefix: hourly\n    count: 150\n    enabled: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: false\n"
    },
    {
        "label": "Create Snapshot policy with multiple schedules",
        "description": "- netapp.ontap.na_ontap_snapshot_policy",
        "body": "- name: Create Snapshot policy with multiple schedules\n  netapp.ontap.na_ontap_snapshot_policy:\n    state: present\n    name: ansible2\n    schedule:\n    - hourly\n    - daily\n    - weekly\n    - monthly\n    - 5min\n    prefix:\n    - hourly\n    - daily\n    - weekly\n    - monthly\n    - 5min\n    count:\n    - 1\n    - 2\n    - 3\n    - 4\n    - 5\n    enabled: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: false\n"
    },
    {
        "label": "Create Snapshot policy owned by a vserver",
        "description": "- netapp.ontap.na_ontap_snapshot_policy",
        "body": "- name: Create Snapshot policy owned by a vserver\n  netapp.ontap.na_ontap_snapshot_policy:\n    state: present\n    name: ansible3\n    vserver: ansible\n    schedule:\n    - hourly\n    - daily\n    - weekly\n    - monthly\n    - 5min\n    prefix:\n    - hourly\n    - daily\n    - weekly\n    - monthly\n    - 5min\n    count:\n    - 1\n    - 2\n    - 3\n    - 4\n    - 5\n    snapmirror_label:\n    - hourly\n    - daily\n    - weekly\n    - monthly\n    - ''\n    enabled: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: false\n"
    },
    {
        "label": "Modify Snapshot policy with multiple schedules",
        "description": "- netapp.ontap.na_ontap_snapshot_policy",
        "body": "- name: Modify Snapshot policy with multiple schedules\n  netapp.ontap.na_ontap_snapshot_policy:\n    state: present\n    name: ansible2\n    schedule:\n    - daily\n    - weekly\n    count:\n    - 20\n    - 30\n    snapmirror_label:\n    - daily\n    - weekly\n    enabled: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: false\n"
    },
    {
        "label": "Delete Snapshot policy",
        "description": "- netapp.ontap.na_ontap_snapshot_policy",
        "body": "- name: Delete Snapshot policy\n  netapp.ontap.na_ontap_snapshot_policy:\n    state: absent\n    name: ansible2\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    https: false\n"
    },
    {
        "label": "Create SNMP community (ZAPI only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Create SNMP community (ZAPI only)\n  netapp.ontap.na_ontap_snmp:\n    state: present\n    snmp_username: communityName\n    access_control: ro\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create SNMP community (snmpv1 or snmpv2) (REST only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Create SNMP community (snmpv1 or snmpv2) (REST only)\n  netapp.ontap.na_ontap_snmp:\n    state: present\n    snmp_username: communityName\n    use_rest: always\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create SNMP user (snmpv3) (REST only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Create SNMP user (snmpv3) (REST only)\n  netapp.ontap.na_ontap_snmp:\n    state: present\n    snmp_username: username\n    use_rest: always\n    authentication_method: usm\n    snmpv3:\n      authentication_protocol: sha\n      authentication_password: humTdumt*@t0nAwa21\n      privacy_protocol: aes128\n      privacy_password: p@**GOandCLCt*300\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete SNMP community (ZAPI only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Delete SNMP community (ZAPI only)\n  netapp.ontap.na_ontap_snmp:\n    state: absent\n    snmp_username: communityName\n    access_control: ro\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete SNMP community (snmpv1 or snmpv2) (REST only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Delete SNMP community (snmpv1 or snmpv2) (REST only)\n  netapp.ontap.na_ontap_snmp:\n    state: absent\n    snmp_username: communityName\n    use_rest: always\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete SNMP user (snmpv3) (REST only)",
        "description": "- netapp.ontap.na_ontap_snmp",
        "body": "- name: Delete SNMP user (snmpv3) (REST only)\n  netapp.ontap.na_ontap_snmp:\n    state: absent\n    snmp_username: username\n    use_rest: always\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Disable SNMP on cluster",
        "description": "- netapp.ontap.na_ontap_snmp_config",
        "body": "- name: Disable SNMP on cluster\n  netapp.ontap.na_ontap_snmp_config:\n    state: present\n    enabled: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Modify SNMP configuration",
        "description": "- netapp.ontap.na_ontap_snmp_config",
        "body": "- name: Modify SNMP configuration\n  netapp.ontap.na_ontap_snmp_config:\n    state: present\n    auth_traps_enabled: true\n    traps_enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n"
    },
    {
        "label": "Create SNMP traphost",
        "description": "- netapp.ontap.na_ontap_snmp_traphosts",
        "body": "- name: Create SNMP traphost\n  netapp.ontap.na_ontap_snmp_traphosts:\n    state: present\n    host: example1.com\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete SNMP traphost",
        "description": "- netapp.ontap.na_ontap_snmp_traphosts",
        "body": "- name: Delete SNMP traphost\n  netapp.ontap.na_ontap_snmp_traphosts:\n    state: absent\n    host: example1.com\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "start ONTAP software update Precheck on Metrocluster DR Site B",
        "description": "- netapp.ontap.na_ontap_software_update",
        "body": "- name: start ONTAP software update Precheck on Metrocluster DR Site B\n  netapp.ontap.na_ontap_software_update:\n    state: present\n    nodes: '{{ nodes }}'\n    package_url: '{{ url }}'\n    download_only: true\n    validate_after_download: true\n    package_version: 9.16.1P4\n    ignore_validation_warning: true\n    timeout: 36000\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "start ONTAP software update on DR Site A",
        "description": "- netapp.ontap.na_ontap_software_update",
        "body": "- name: start ONTAP software update on DR Site A\n  netapp.ontap.na_ontap_software_update:\n    state: present\n    nodes: '{{ nodes }}'\n    package_url: '{{ url }}'\n    package_version: 9.16.1P4\n    ignore_validation_warning: true\n    timeout: 36000\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "run ontap cli command using SSH",
        "description": "- netapp.ontap.na_ontap_ssh_command",
        "body": "- name: run ontap cli command using SSH\n  netapp.ontap.na_ontap_ssh_command:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: version\n"
    },
    {
        "label": "run ontap cli command",
        "description": "- netapp.ontap.na_ontap_ssh_command",
        "body": "- name: run ontap cli command\n  netapp.ontap.na_ontap_ssh_command:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: node show -fields node,health,uptime,model\n    privilege: admin\n"
    },
    {
        "label": "run ontap cli command",
        "description": "- netapp.ontap.na_ontap_ssh_command",
        "body": "- name: run ontap cli command\n  netapp.ontap.na_ontap_ssh_command:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    command: node show -fields node,health,uptime,model\n    exclude_lines: 'ode '\n    accept_unknown_host_keys: true\n    privilege: admin\n"
    },
    {
        "label": "run ontap SSH command on SP",
        "description": "- netapp.ontap.na_ontap_ssh_command",
        "body": "- name: run ontap SSH command on SP\n  netapp.ontap.na_ontap_ssh_command:\n    command: sp switch-version\n    privilege: diag\n    sp: true\n    register: result\n"
    },
    {
        "label": "Enable storage auto giveback",
        "description": "- netapp.ontap.na_ontap_storage_auto_giveback",
        "body": "- name: Enable storage auto giveback\n  netapp.ontap.na_ontap_storage_auto_giveback:\n    name: node1\n    auto_giveback_enabled: true\n    auto_giveback_after_panic_enabled: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Disable storage auto giveback",
        "description": "- netapp.ontap.na_ontap_storage_auto_giveback",
        "body": "- name: Disable storage auto giveback\n  netapp.ontap.na_ontap_storage_auto_giveback:\n    name: node1\n    auto_giveback_enabled: false\n    auto_giveback_after_panic_enabled: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable storage failover",
        "description": "- netapp.ontap.na_ontap_storage_failover",
        "body": "- name: Enable storage failover\n  netapp.ontap.na_ontap_storage_failover:\n    state: present\n    node_name: node1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Disable storage failover",
        "description": "- netapp.ontap.na_ontap_storage_failover",
        "body": "- name: Disable storage failover\n  netapp.ontap.na_ontap_storage_failover:\n    state: absent\n    node_name: node1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create a new storage unit(LUN) clone",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Create a new storage unit(LUN) clone\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1_clone1\n    vserver: svm1\n    clone:\n      storage_unit: lun1\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Split a storage unit(LUN) clone",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Split a storage unit(LUN) clone\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1_clone1\n    vserver: svm1\n    split_initiated: true\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Create a new storage unit(LUN) clone using snapshot",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Create a new storage unit(LUN) clone using snapshot\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1_clone1\n    vserver: svm1\n    clone:\n      storage_unit: lun1\n      snapshot: hourly.2025-04-23_0205\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Clone a storage unit(LUN), split new clone simultaneously",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Clone a storage unit(LUN), split new clone simultaneously\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1_clone1\n    vserver: svm1\n    clone:\n      storage_unit: lun1\n    split_initiated: true\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Restore a storage unit(LUN) to a prior snapshot",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Restore a storage unit(LUN) to a prior snapshot\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1\n    vserver: svm1\n    restore_to: hourly.2025-04-21_0905\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Move a storage unit(LUN)",
        "description": "- netapp.ontap.na_ontap_storage_unit",
        "body": "- name: Move a storage unit(LUN)\n  netapp.ontap.na_ontap_storage_unit:\n    state: present\n    name: lun1\n    vserver: svm1\n    target_location: storage_availability_zone_0\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Create a snapshot for LUN storage unit",
        "description": "- netapp.ontap.na_ontap_storage_unit_snapshot",
        "body": "- name: Create a snapshot for LUN storage unit\n  netapp.ontap.na_ontap_storage_unit_snapshot:\n    state: present\n    name: lun1_snap1\n    vserver: ansibleSVM\n    storage_unit: lun1\n    expiry_time: 2025-04-09 07:30:00-04:00\n    snapmirror_label: my_label\n    comment: snapshot for lun1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Update a snapshot",
        "description": "- netapp.ontap.na_ontap_storage_unit_snapshot",
        "body": "- name: Update a snapshot\n  netapp.ontap.na_ontap_storage_unit_snapshot:\n    name: lun1_snap1\n    vserver: ansibleSVM\n    storage_unit: lun1\n    expiry_time: 2025-04-09 08:30:00-04:00\n    snapmirror_label: another_label\n    comment: updated expiry date, label\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Rename a storage unit snapshot",
        "description": "- netapp.ontap.na_ontap_storage_unit_snapshot",
        "body": "- name: Rename a storage unit snapshot\n  netapp.ontap.na_ontap_storage_unit_snapshot:\n    name: lun1_snapshot1\n    from_name: lun1_snap1\n    vserver: ansibleSVM\n    storage_unit: lun1\n    expiry_time: 2025-04-09 08:30:00-04:00\n    snapmirror_label: another_label\n    comment: snapshot for lun1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Delete a snapshot",
        "description": "- netapp.ontap.na_ontap_mav_approval_group",
        "body": "- name: Delete a snapshot\n  netapp.ontap.na_ontap_mav_approval_group:\n    state: absent\n    name: lun1_snapshot1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Get support config backup",
        "description": "- netapp.ontap.na_ontap_support_config_backup",
        "body": "- name: Get support config backup\n  netapp.ontap.na_ontap_support_config_backup:\n    state: present\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    validate_certificate: false\n    url: '{{ backup_url }}'\n    name: Netappuser\n"
    },
    {
        "label": "Modify the support config_backup",
        "description": "- netapp.ontap.na_ontap_support_config_backup",
        "body": "- name: Modify the support config_backup\n  netapp.ontap.na_ontap_support_config_backup:\n    state: present\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    validate_certificate: true\n    url: '{{ backup_url }}'\n    name: ftpuser\n    set_password: netapp\n    feature_flags:\n      trace_apis: true\n"
    },
    {
        "label": "Create SVM",
        "description": "- netapp.ontap.na_ontap_svm",
        "body": "- name: Create SVM\n  netapp.ontap.na_ontap_svm:\n    state: present\n    name: ansibleVServer\n    root_volume: vol1\n    root_volume_aggregate: aggr1\n    root_volume_security_style: mixed\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create SVM",
        "description": "- netapp.ontap.na_ontap_svm",
        "body": "- name: Create SVM\n  netapp.ontap.na_ontap_svm:\n    state: present\n    services:\n      cifs:\n        allowed: true\n      fcp:\n        allowed: true\n      nfs:\n        allowed: true\n        enabled: true\n      s3:\n        allowed: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Stop SVM REST",
        "description": "- netapp.ontap.na_ontap_svm",
        "body": "- name: Stop SVM REST\n  netapp.ontap.na_ontap_svm:\n    state: present\n    name: ansibleVServer\n    admin_state: stopped\n    use_rest: always\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Set SVM Options",
        "description": "- netapp.ontap.na_ontap_svm_options",
        "body": "- name: Set SVM Options\n  netapp.ontap.na_ontap_svm_options:\n    vserver: '{{ netapp_vserver_name }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    name: snmp.enable\n    value: 'on'\n"
    },
    {
        "label": "Modify adapter",
        "description": "- netapp.ontap.na_ontap_adapter",
        "body": "- name: Modify adapter\n  netapp.ontap.na_ontap_adapter:\n    state: present\n    adapter_name: 0e\n    pair_adapters: 0f\n    node_name: laurentn-vsim1\n    mode: fc\n    type: target\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create UNIX group",
        "description": "- netapp.ontap.na_ontap_unix_group",
        "body": "- name: Create UNIX group\n  netapp.ontap.na_ontap_unix_group:\n    state: present\n    name: SampleGroup\n    vserver: ansibleVServer\n    id: 2\n    users: user1,user2\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete all users in UNIX group",
        "description": "- netapp.ontap.na_ontap_unix_group",
        "body": "- name: Delete all users in UNIX group\n  netapp.ontap.na_ontap_unix_group:\n    state: present\n    name: SampleGroup\n    vserver: ansibleVServer\n    users: ''\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete UNIX group",
        "description": "- netapp.ontap.na_ontap_unix_group",
        "body": "- name: Delete UNIX group\n  netapp.ontap.na_ontap_unix_group:\n    state: absent\n    name: SampleGroup\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create UNIX User",
        "description": "- netapp.ontap.na_ontap_unix_user",
        "body": "- name: Create UNIX User\n  netapp.ontap.na_ontap_unix_user:\n    state: present\n    name: SampleUser\n    vserver: ansibleVServer\n    group_id: 1\n    id: 2\n    full_name: Test User\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete UNIX User",
        "description": "- netapp.ontap.na_ontap_unix_user",
        "body": "- name: Delete UNIX User\n  netapp.ontap.na_ontap_unix_user:\n    state: absent\n    name: SampleUser\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create User",
        "description": "- netapp.ontap.na_ontap_user",
        "body": "- name: Create User\n  netapp.ontap.na_ontap_user:\n    state: present\n    name: SampleUser\n    applications: ssh,console\n    authentication_method: password\n    set_password: apn1242183u1298u41\n    lock_user: true\n    role_name: vsadmin\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create cluster scoped user in REST.",
        "description": "- netapp.ontap.na_ontap_user",
        "body": "- name: Create cluster scoped user in REST.\n  netapp.ontap.na_ontap_user:\n    state: present\n    name: SampleUser\n    applications: ssh,console\n    authentication_method: password\n    set_password: apn1242183u1298u41\n    lock_user: true\n    role_name: admin\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete User",
        "description": "- netapp.ontap.na_ontap_user",
        "body": "- name: Delete User\n  netapp.ontap.na_ontap_user:\n    state: absent\n    name: SampleUser\n    applications: ssh\n    authentication_method: password\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create user with snmp application (ZAPI)",
        "description": "- netapp.ontap.na_ontap_user",
        "body": "- name: Create user with snmp application (ZAPI)\n  netapp.ontap.na_ontap_user:\n    state: present\n    name: test_cert_snmp\n    applications: snmp\n    authentication_method: usm\n    role_name: admin\n    authentication_protocol: md5\n    authentication_password: '12345678'\n    privacy_protocol: aes128\n    privacy_password: '12345678'\n    engine_id: '7063514941000000000000'\n    remote_switch_ipaddress: 10.0.0.0\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create user",
        "description": "- netapp.ontap.na_ontap_user",
        "body": "- name: Create user\n  netapp.ontap.na_ontap_user:\n    state: present\n    name: test123\n    application_dicts:\n    - application: http\n      authentication_methods: password\n    - application: ssh\n      authentication_methods: password,publickey\n    role_name: vsadmin\n    set_password: bobdole1234566\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create User Role Zapi",
        "description": "- netapp.ontap.na_ontap_user_role",
        "body": "- name: Create User Role Zapi\n  netapp.ontap.na_ontap_user_role:\n    state: present\n    name: ansibleRole\n    command_directory_name: volume\n    access_level: none\n    query: show\n    vserver: ansibleVServer\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify User Role Zapi",
        "description": "- netapp.ontap.na_ontap_user_role",
        "body": "- name: Modify User Role Zapi\n  netapp.ontap.na_ontap_user_role:\n    state: present\n    name: ansibleRole\n    command_directory_name: volume\n    access_level: none\n    query: ''\n    vserver: ansibleVServer\n    use_rest: never\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create user role REST in ONTAP 9.11.1",
        "description": "- netapp.ontap.na_ontap_user_role",
        "body": "- name: Create user role REST in ONTAP 9.11.1\n  netapp.ontap.na_ontap_user_role:\n    state: present\n    privileges:\n    - path: /api/cluster/jobs\n    vserver: ansibleSVM\n    name: carchi-test-role\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify user role REST in ONTAP 9.11.1",
        "description": "- netapp.ontap.na_ontap_user_role",
        "body": "- name: Modify user role REST in ONTAP 9.11.1\n  netapp.ontap.na_ontap_user_role:\n    state: present\n    privileges:\n    - path: /api/cluster/jobs\n      access: readonly\n    - path: /api/storage/volumes\n      access: readonly\n    vserver: ansibleSVM\n    name: carchi-test-role\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create FlexVol",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Create FlexVol\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume12\n    is_infinite: false\n    aggregate_name: ansible_aggr\n    size: 100\n    size_unit: mb\n    user_id: 1001\n    group_id: 2002\n    space_guarantee: none\n    tiering_policy: auto\n    export_policy: default\n    percent_snapshot_space: 60\n    qos_policy_group: max_performance_gold\n    vserver: ansibleVServer\n    wait_for_completion: true\n    space_slo: none\n    nvfail_enabled: false\n    comment: ansible created volume\n    tiering_object_tags:\n    - tag1=one\n    - tag2=two\n    - tag3=3\n    - tag4=4\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Volume Delete",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Volume Delete\n  netapp.ontap.na_ontap_volume:\n    state: absent\n    name: ansibleVolume12\n    aggregate_name: ansible_aggr\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Make FlexVol offline",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Make FlexVol offline\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume\n    is_infinite: false\n    is_online: false\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create Flexgroup volume manually",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Create Flexgroup volume manually\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume\n    is_infinite: false\n    aggr_list: '{{ aggr_list }}'\n    aggr_list_multiplier: 2\n    size: 200\n    size_unit: mb\n    space_guarantee: none\n    export_policy: default\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n    unix_permissions: 777\n    snapshot_policy: default\n    time_out: 0\n"
    },
    {
        "label": "Create Flexgroup volume auto provsion as flex group",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Create Flexgroup volume auto provsion as flex group\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume\n    is_infinite: false\n    auto_provision_as: flexgroup\n    size: 200\n    size_unit: mb\n    space_guarantee: none\n    export_policy: default\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n    unix_permissions: 777\n    snapshot_policy: default\n    time_out: 0\n"
    },
    {
        "label": "Create FlexVol with QoS adaptive",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Create FlexVol with QoS adaptive\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume15\n    is_infinite: false\n    aggregate_name: ansible_aggr\n    size: 100\n    size_unit: gb\n    space_guarantee: none\n    export_policy: default\n    percent_snapshot_space: 10\n    qos_adaptive_policy_group: extreme\n    vserver: ansibleVServer\n    wait_for_completion: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify volume dr protection (vserver of the volume must be in a snapmirror relationship)",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Modify volume dr protection (vserver of the volume must be in a snapmirror\n    relationship)\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume\n    vserver_dr_protection: protected\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n"
    },
    {
        "label": "Modify volume with snapshot auto delete options",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Modify volume with snapshot auto delete options\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: vol_auto_delete\n    snapshot_auto_delete:\n      state: 'on'\n      commitment: try\n      defer_delete: scheduled\n      target_free_space: 30\n      destroy_list: lun_clone,vol_clone\n      delete_order: newest_first\n    aggregate_name: '{{ aggr }}'\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n"
    },
    {
        "label": "Move volume with force cutover action",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Move volume with force cutover action\n  netapp.ontap.na_ontap_volume:\n    name: ansible_vol\n    aggregate_name: aggr_ansible\n    cutover_action: force\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n"
    },
    {
        "label": "Rehost volume to another vserver auto remap luns",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Rehost volume to another vserver auto remap luns\n  netapp.ontap.na_ontap_volume:\n    name: ansible_vol\n    from_vserver: ansible\n    auto_remap_luns: true\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n"
    },
    {
        "label": "Rehost volume to another vserver force unmap luns",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Rehost volume to another vserver force unmap luns\n  netapp.ontap.na_ontap_volume:\n    name: ansible_vol\n    from_vserver: ansible\n    force_unmap_luns: true\n    vserver: '{{ vserver }}'\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: false\n"
    },
    {
        "label": "Snapshot restore volume",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Snapshot restore volume\n  netapp.ontap.na_ontap_volume:\n    name: ansible_vol\n    vserver: ansible\n    snapshot_restore: 2020-05-24-weekly\n    force_restore: true\n    preserve_lun_ids: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Volume create using application/applications nas template",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Volume create using application/applications nas template\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: ansibleVolume12\n    vserver: ansibleSVM\n    size: 100000000\n    size_unit: b\n    space_guarantee: none\n    language: es\n    percent_snapshot_space: 60\n    unix_permissions: '---rwxrwxrwx'\n    snapshot_policy: default\n    efficiency_policy: default\n    comment: testing\n    nas_application_template:\n      nfs_access:\n      - access: ro\n      - access: rw\n        host: 10.0.0.0/8\n      exclude_aggregates: aggr0\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "volume create with snaplock set.",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: volume create with snaplock set.\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: '{{ snaplock_volume }}'\n    aggregate_name: '{{ aggregate }}'\n    size: 20\n    size_unit: mb\n    space_guarantee: none\n    policy: default\n    type: rw\n    snaplock:\n      type: enterprise\n      retention:\n        default: '{{ 60 | netapp.ontap.iso8601_duration_from_seconds }}'\n"
    },
    {
        "label": "Create volume with snapshot-auto-delete options - REST",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Create volume with snapshot-auto-delete options - REST\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: test_vol\n    aggregate_name: '{{ aggr }}'\n    size: 20\n    size_unit: mb\n    snapshot_auto_delete:\n      state: 'on'\n      trigger: volume\n      delete_order: oldest_first\n      defer_delete: user_created\n      commitment: try\n      target_free_space: 30\n      prefix: my_prefix\n    wait_for_completion: true\n"
    },
    {
        "label": "Modify volume - REST",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Modify volume - REST\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: test_vol\n    aggregate_name: '{{ aggr }}'\n    snapdir_access: false\n    snapshot_auto_delete:\n      state: 'on'\n      target_free_space: 25\n"
    },
    {
        "label": "Modify volume tiering onject_tags - REST",
        "description": "- netapp.ontap.na_ontap_volume",
        "body": "- name: Modify volume tiering onject_tags - REST\n  netapp.ontap.na_ontap_volume:\n    state: present\n    name: test_vol\n    aggregate_name: '{{ aggr }}'\n    tiering_object_tags:\n    - tag1=one\n    - tag2=two\n"
    },
    {
        "label": "Modify volume autosize",
        "description": "- netapp.ontap.na_ontap_volume_autosize",
        "body": "- name: Modify volume autosize\n  netapp.ontap.na_ontap_volume_autosize:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    volume: ansibleVolumesize12\n    mode: grow\n    grow_threshold_percent: 99\n    increment_size: 50m\n    maximum_size: 10g\n    minimum_size: 21m\n    shrink_threshold_percent: 40\n    vserver: ansible_vserver\n"
    },
    {
        "label": "Reset volume autosize",
        "description": "- netapp.ontap.na_ontap_volume_autosize",
        "body": "- name: Reset volume autosize\n  netapp.ontap.na_ontap_volume_autosize:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    volume: ansibleVolumesize12\n    reset: true\n    vserver: ansible_vserver\n"
    },
    {
        "label": "Create volume clone - ZAPI",
        "description": "- netapp.ontap.na_ontap_volume_clone",
        "body": "- name: Create volume clone - ZAPI\n  netapp.ontap.na_ontap_volume_clone:\n    state: present\n    vserver: ansibleSVM\n    parent_volume: source_volume\n    name: cloned_volume\n    space_reserve: none\n    parent_snapshot: backup1\n    junction_path: /cloned_volume\n    uid: 1\n    gid: 1\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: never\n"
    },
    {
        "label": "Split an existing volume clone - REST",
        "description": "- netapp.ontap.na_ontap_volume_clone",
        "body": "- name: Split an existing volume clone - REST\n  netapp.ontap.na_ontap_volume_clone:\n    state: present\n    vserver: ansibleSVM\n    parent_volume: source_volume\n    name: cloned_volume\n    split: true\n    wait_for_completion: true\n    time_out: 90\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: '{{ validate_certs }}'\n    use_rest: always\n"
    },
    {
        "label": "Enable Volume efficiency",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Enable Volume efficiency\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: present\n    vserver: TESTSVM\n    path: /vol/test_sis\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Disable Volume efficiency test",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Disable Volume efficiency test\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: absent\n    vserver: TESTSVM\n    path: /vol/test_sis\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify storage efficiency schedule with ZAPI.",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Modify storage efficiency schedule with ZAPI.\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: present\n    vserver: TESTSVM\n    path: /vol/test_sis\n    schedule: mon-sun@0,1,23\n    enable_compression: true\n    enable_inline_compression: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Start volume efficiency",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Start volume efficiency\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: present\n    vserver: TESTSVM\n    path: /vol/test_sis\n    volume_efficiency: start\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Stop volume efficiency",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Stop volume efficiency\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: present\n    vserver: TESTSVM\n    path: /vol/test_sis\n    volume_efficiency: stop\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Modify volume efficiency with volume name in REST.",
        "description": "- netapp.ontap.na_ontap_volume_efficiency",
        "body": "- name: Modify volume efficiency with volume name in REST.\n  netapp.ontap.na_ontap_volume_efficiency:\n    state: present\n    vserver: TESTSVM\n    volume_name: test_sis\n    volume_efficiency: stop\n    enable_compression: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n"
    },
    {
        "label": "Set volume snaplock",
        "description": "- netapp.ontap.na_ontap_volume_snaplock",
        "body": "- name: Set volume snaplock\n  netapp.ontap.na_ontap_volume_snaplock:\n    vserver: ansibleSVM\n    name: ansibleVolume\n    default_retention_period: 5 days\n    minimum_retention_period: 0 years\n    maximum_retention_period: 10 days\n    is_volume_append_mode_enabled: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Enable Vscan",
        "description": "- netapp.ontap.na_ontap_vscan",
        "body": "- name: Enable Vscan\n  netapp.ontap.na_ontap_vscan:\n    enable: true\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: ansibleSVM\n"
    },
    {
        "label": "Disable Vscan",
        "description": "- netapp.ontap.na_ontap_vscan",
        "body": "- name: Disable Vscan\n  netapp.ontap.na_ontap_vscan:\n    enable: false\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: ansibleSVM\n"
    },
    {
        "label": "Create Vscan On Access Policy",
        "description": "- netapp.ontap.na_ontap_vscan_on_access_policy",
        "body": "- name: Create Vscan On Access Policy\n  netapp.ontap.na_ontap_vscan_on_access_policy:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    policy_name: carchi_policy\n    file_ext_to_exclude:\n    - exe\n    - yml\n"
    },
    {
        "label": "Create Vscan On Access Policy with Policy Status enabled",
        "description": "- netapp.ontap.na_ontap_vscan_on_access_policy",
        "body": "- name: Create Vscan On Access Policy with Policy Status enabled\n  netapp.ontap.na_ontap_vscan_on_access_policy:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    policy_name: carchi_policy\n    file_ext_to_exclude:\n    - exe\n    - yml\n    policy_status: true\n"
    },
    {
        "label": "Modify Vscan on Access Policy",
        "description": "- netapp.ontap.na_ontap_vscan_on_access_policy",
        "body": "- name: Modify Vscan on Access Policy\n  netapp.ontap.na_ontap_vscan_on_access_policy:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    policy_name: carchi_policy\n    file_ext_to_exclude:\n    - exe\n    - yml\n    - py\n"
    },
    {
        "label": "Delete On Access Policy",
        "description": "- netapp.ontap.na_ontap_vscan_on_access_policy",
        "body": "- name: Delete On Access Policy\n  netapp.ontap.na_ontap_vscan_on_access_policy:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    policy_name: carchi_policy\n"
    },
    {
        "label": "Create Vscan On Demand Task",
        "description": "- netapp.ontap.na_ontap_vscan_on_demand_task",
        "body": "- name: Create Vscan On Demand Task\n  netapp.ontap.na_ontap_vscan_on_demand_task:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    task_name: carchiOnDemand\n    scan_paths: /\n    report_directory: /\n    file_ext_to_exclude:\n    - py\n    - yml\n    max_file_size: 10737418241\n    paths_to_exclude:\n    - /tmp\n    - /var\n    report_log_level: info\n    request_timeout: 60\n"
    },
    {
        "label": "Delete Vscan On Demand Task",
        "description": "- netapp.ontap.na_ontap_vscan_on_demand_task",
        "body": "- name: Delete Vscan On Demand Task\n  netapp.ontap.na_ontap_vscan_on_demand_task:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    task_name: carchiOnDemand\n"
    },
    {
        "label": "Create and enable Scanner pool",
        "description": "- netapp.ontap.na_ontap_vscan_scanner_pool",
        "body": "- name: Create and enable Scanner pool\n  netapp.ontap.na_ontap_vscan_scanner_pool:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    hostnames:\n    - name\n    - name2\n    privileged_users:\n    - sim.rtp.openeng.netapp.com\\\\admin\n    - sim.rtp.openeng.netapp.com\\\\carchi\n    scanner_pool: Scanner1\n    scanner_policy: primary\n"
    },
    {
        "label": "Modify scanner pool",
        "description": "- netapp.ontap.na_ontap_vscan_scanner_pool",
        "body": "- name: Modify scanner pool\n  netapp.ontap.na_ontap_vscan_scanner_pool:\n    state: present\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    hostnames:\n    - name\n    - name2\n    - name3\n    privileged_users:\n    - sim.rtp.openeng.netapp.com\\\\admin\n    - sim.rtp.openeng.netapp.com\\\\carchi\n    - sim.rtp.openeng.netapp.com\\\\chuyic\n    scanner_pool: Scanner1\n"
    },
    {
        "label": "Delete a scanner pool",
        "description": "- netapp.ontap.na_ontap_vscan_scanner_pool",
        "body": "- name: Delete a scanner pool\n  netapp.ontap.na_ontap_vscan_scanner_pool:\n    state: absent\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    hostname: '{{ netapp_hostname }}'\n    vserver: carchi-vsim2\n    scanner_pool: Scanner1\n"
    },
    {
        "label": "Create vserver audit configuration",
        "description": "- netapp.ontap.na_ontap_vserver_audit",
        "body": "- name: Create vserver audit configuration\n  netapp.ontap.na_ontap_vserver_audit:\n    state: present\n    vserver: ansible\n    enabled: true\n    events:\n      authorization_policy: false\n      cap_staging: false\n      cifs_logon_logoff: true\n      file_operations: true\n      file_share: false\n      security_group: false\n      user_account: false\n    log_path: /\n    log:\n      format: xml\n      retention:\n        count: 4\n      rotation:\n        size: '1048576'\n    guarantee: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify vserver audit configuration",
        "description": "- netapp.ontap.na_ontap_vserver_audit",
        "body": "- name: Modify vserver audit configuration\n  netapp.ontap.na_ontap_vserver_audit:\n    state: present\n    vserver: ansible\n    enabled: true\n    events:\n      authorization_policy: true\n      cap_staging: true\n      cifs_logon_logoff: true\n      file_operations: true\n      file_share: true\n      security_group: true\n      user_account: true\n    log_path: /tmp\n    log:\n      format: evtx\n      retention:\n        count: 5\n      rotation:\n        size: '104857600'\n    guarantee: true\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete vserver audit configuration",
        "description": "- netapp.ontap.na_ontap_vserver_audit",
        "body": "- name: Delete vserver audit configuration\n  netapp.ontap.na_ontap_vserver_audit:\n    state: absent\n    vserver: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Create vserver audit configuration",
        "description": "- netapp.ontap.na_ontap_vserver_audit",
        "body": "- name: Create vserver audit configuration\n  netapp.ontap.na_ontap_vserver_audit:\n    state: present\n    vserver: ansible\n    enabled: true\n    events:\n      authorization_policy: false\n      cap_staging: false\n      cifs_logon_logoff: true\n      file_operations: true\n      file_share: false\n      security_group: false\n      user_account: false\n    log_path: /\n    log:\n      format: xml\n      retention:\n        count: 6\n      rotation:\n        schedule:\n          hours:\n          - 6\n          - 12\n          - 18\n          minutes:\n          - 15\n          - 30\n          - 45\n          months:\n          - 1\n          - 3\n          weekdays:\n          - 1\n          - 3\n          - 5\n    guarantee: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify vserver audit configuration",
        "description": "- netapp.ontap.na_ontap_vserver_audit",
        "body": "- name: Modify vserver audit configuration\n  netapp.ontap.na_ontap_vserver_audit:\n    state: present\n    vserver: ansible\n    enabled: true\n    events:\n      authorization_policy: false\n      cap_staging: false\n      cifs_logon_logoff: true\n      file_operations: true\n      file_share: false\n      security_group: false\n      user_account: false\n    log_path: /\n    log:\n      format: xml\n      rotation:\n        schedule:\n          hours:\n          - 12\n          minutes:\n          - 30\n          months:\n          - -1\n          weekdays:\n          - -1\n    guarantee: false\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify cifs security",
        "description": "- netapp.ontap.na_ontap_vserver_cifs_security",
        "body": "- name: Modify cifs security\n  netapp.ontap.na_ontap_vserver_cifs_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: ansible\n    is_aes_encryption_enabled: false\n    lm_compatibility_level: lm_ntlm_ntlmv2_krb\n    smb1_enabled_for_dc_connections: system_default\n    smb2_enabled_for_dc_connections: system_default\n    use_start_tls_for_ad_ldap: false\n    referral_enabled_for_ad_ldap: false\n    session_security_for_ad_ldap: none\n    is_signing_required: false\n    is_password_complexity_required: false\n    encryption_required_for_dc_connections: false\n    use_ldaps_for_ad_ldap: false\n"
    },
    {
        "label": "modify cifs security is_smb_encryption_required",
        "description": "- netapp.ontap.na_ontap_vserver_cifs_security",
        "body": "- name: modify cifs security is_smb_encryption_required\n  netapp.ontap.na_ontap_vserver_cifs_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: ansible\n    is_smb_encryption_required: false\n"
    },
    {
        "label": "modify cifs security int options",
        "description": "- netapp.ontap.na_ontap_vserver_cifs_security",
        "body": "- name: modify cifs security int options\n  netapp.ontap.na_ontap_vserver_cifs_security:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    vserver: ansible\n    kerberos_clock_skew: 10\n    kerberos_ticket_age: 10\n    kerberos_renew_age: 5\n    kerberos_kdc_timeout: 3\n"
    },
    {
        "label": "Source vserver peer create",
        "description": "- netapp.ontap.na_ontap_vserver_peer",
        "body": "- name: Source vserver peer create\n  netapp.ontap.na_ontap_vserver_peer:\n    state: present\n    peer_vserver: ansible2\n    peer_cluster: ansibleCluster\n    local_name_for_peer: peername\n    local_name_for_source: sourcename\n    vserver: ansible\n    applications:\n    - snapmirror\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ netapp_dest_hostname }}'\n"
    },
    {
        "label": "vserver peer delete",
        "description": "- netapp.ontap.na_ontap_vserver_peer",
        "body": "- name: vserver peer delete\n  netapp.ontap.na_ontap_vserver_peer:\n    state: absent\n    peer_vserver: ansible2\n    vserver: ansible\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Source vserver peer create - different credentials",
        "description": "- netapp.ontap.na_ontap_vserver_peer",
        "body": "- name: Source vserver peer create - different credentials\n  netapp.ontap.na_ontap_vserver_peer:\n    state: present\n    peer_vserver: ansible2\n    peer_cluster: ansibleCluster\n    local_name_for_peer: peername\n    local_name_for_source: sourcename\n    vserver: ansible\n    applications:\n    - snapmirror\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    peer_options:\n      hostname: '{{ netapp_dest_hostname }}'\n      cert_filepath: '{{ cert_filepath }}'\n      key_filepath: '{{ key_filepath }}'\n"
    },
    {
        "label": "Create vserver peer permission for an SVM",
        "description": "- netapp.ontap.na_ontap_vserver_peer_permissions",
        "body": "- name: Create vserver peer permission for an SVM\n  netapp.ontap.na_ontap_vserver_peer_permissions:\n    state: present\n    vserver: ansible\n    cluster_peer: test_cluster\n    applications:\n    - snapmirror\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Modify vserver peer permission for an SVM",
        "description": "- netapp.ontap.na_ontap_vserver_peer_permissions",
        "body": "- name: Modify vserver peer permission for an SVM\n  netapp.ontap.na_ontap_vserver_peer_permissions:\n    state: present\n    vserver: ansible\n    cluster_peer: test_cluster\n    applications:\n    - snapmirror\n    - flexcache\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete vserver peer permission for an SVM",
        "description": "- netapp.ontap.na_ontap_vserver_peer_permissions",
        "body": "- name: Delete vserver peer permission for an SVM\n  netapp.ontap.na_ontap_vserver_peer_permissions:\n    state: absent\n    vserver: ansible\n    cluster_peer: test_cluster\n    applications:\n    - snapmirror\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Wait for sp_upgrade in progress",
        "description": "- netapp.ontap.na_ontap_wait_for_condition",
        "body": "- name: Wait for sp_upgrade in progress\n  netapp.ontap.na_ontap_wait_for_condition:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    name: sp_upgrade\n    conditions: is_in_progress\n    attributes:\n      node: '{{ node }}'\n    polling_interval: 30\n    timeout: 1800\n"
    },
    {
        "label": "Wait for sp_upgrade not in progress",
        "description": "- netapp.ontap.na_ontap_wait_for_condition",
        "body": "- name: Wait for sp_upgrade not in progress\n  netapp.ontap.na_ontap_wait_for_condition:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    name: sp_upgrade\n    conditions: is_in_progress\n    state: absent\n    attributes:\n      node: '{{ ontap_admin_ip }}'\n    polling_interval: 30\n    timeout: 1800\n"
    },
    {
        "label": "Wait for sp_version to match 3.9",
        "description": "- netapp.ontap.na_ontap_wait_for_condition",
        "body": "- name: Wait for sp_version to match 3.9\n  netapp.ontap.na_ontap_wait_for_condition:\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n    https: true\n    validate_certs: false\n    name: sp_version\n    conditions: firmware_version\n    state: present\n    attributes:\n      node: '{{ ontap_admin_ip }}'\n      expected_version: 3.9\n    polling_interval: 30\n    timeout: 1800\n"
    },
    {
        "label": "Create FCP Alias",
        "description": "- netapp.ontap.na_ontap_wwpn_alias",
        "body": "- name: Create FCP Alias\n  netapp.ontap.na_ontap_wwpn_alias:\n    state: present\n    name: alias1\n    wwpn: 01:02:03:04:0a:0b:0c:0d\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    },
    {
        "label": "Delete FCP Alias",
        "description": "- netapp.ontap.na_ontap_wwpn_alias",
        "body": "- name: Delete FCP Alias\n  netapp.ontap.na_ontap_wwpn_alias:\n    state: absent\n    name: alias1\n    vserver: ansibleVServer\n    hostname: '{{ netapp_hostname }}'\n    username: '{{ netapp_username }}'\n    password: '{{ netapp_password }}'\n"
    }
]