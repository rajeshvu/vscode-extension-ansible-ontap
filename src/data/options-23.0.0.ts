import { ModuleOptions } from "./options";

export const options_23_0_0: ModuleOptions = {
    "netapp.ontap.na_ontap_active_directory": {
        "state": {
            "description": [
                "Whether the Active Directory should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "account_name": {
            "description": [
                "Active Directory account NetBIOS name.",
                "Modifying an existing account name is not supported. The account must be deleted and recreated."
            ],
            "required": true,
            "type": "str"
        },
        "admin_password": {
            "description": [
                "Administrator password required for Active Directory account creation."
            ],
            "required": true,
            "type": "str"
        },
        "admin_username": {
            "description": [
                "Administrator username required for Active Directory account creation."
            ],
            "required": true,
            "type": "str"
        },
        "domain": {
            "description": [
                "Fully qualified domain name."
            ],
            "type": "str",
            "aliases": [
                "fqdn"
            ]
        },
        "force_account_overwrite": {
            "description": [
                "If true and a machine account with the same name as specified in 'account-name' exists in Active Directory, it will be overwritten and reused."
            ],
            "type": "bool"
        },
        "organizational_unit": {
            "description": [
                "Organizational unit under which the Active Directory account will be created.",
                "Modifying the organizational unit is not supported. The object must be deleted and recreated."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_active_directory_domain_controllers": {
        "state": {
            "description": [
                "Whether the Active Directory preferred Domain Controllers configuration should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "fqdn": {
            "description": [
                "Fully Qualified Domain Name."
            ],
            "required": true,
            "type": "str"
        },
        "server_ip": {
            "description": [
                "IP address of the preferred DC. The address can be either an IPv4 or an IPv6 address."
            ],
            "required": true,
            "type": "str"
        },
        "skip_config_validation": {
            "description": [
                "Skip the validation of the specified preferred DC configuration."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_aggregate": {
        "state": {
            "description": [
                "Whether the specified aggregate should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "service_state": {
            "description": [
                "Whether the specified aggregate should be enabled or disabled. Creates aggregate if doesnt exist.",
                "Supported from 9.11.1 or later in REST."
            ],
            "choices": [
                "online",
                "offline"
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the aggregate to manage."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the aggregate to be renamed."
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nodes": {
            "description": [
                "Node(s) for the aggregate to be created on.  If no node specified, mgmt lif home will be used.",
                "ZAPI only - if multiple nodes specified an aggr stripe will be made.",
                "With REST, only one node can be specified.  If disk_count is present, node name is required."
            ],
            "type": "list",
            "elements": "str"
        },
        "disk_type": {
            "description": [
                "Type of disk to use to build aggregate.",
                "Not supported with REST - see C(disk_class).",
                "SSD-NVM, SSD-CAP were added with ONTAP 9.6.",
                "VMLUN was added with ONTAP 9.9."
            ],
            "choices": [
                "ATA",
                "BSAS",
                "FCAL",
                "FSAS",
                "LUN",
                "MSATA",
                "SAS",
                "SSD",
                "SSD-CAP",
                "SSD-NVM",
                "VMDISK",
                "VMLUN",
                "VMLUN-SSD"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "disk_class": {
            "description": [
                "Class of disk to use to build aggregate.",
                "C(capacity_flash) is listed in swagger, but rejected as invalid by ONTAP."
            ],
            "choices": [
                "capacity",
                "performance",
                "archive",
                "solid_state",
                "array",
                "virtual",
                "data_center",
                "capacity_flash"
            ],
            "type": "str",
            "version_added": "21.16.0"
        },
        "disk_count": {
            "description": [
                "Number of disks to place into the aggregate, including parity disks.",
                "The disks in this newly-created aggregate come from the spare disk pool.",
                "The smallest disks in this pool join the aggregate first, unless the C(disk-size) argument is provided.",
                "Either C(disk-count) or C(disks) must be supplied. Range [0..2^31-1].",
                "Required when C(state=present).",
                "Modifiable only if specified disk_count is larger than current disk_count.",
                "Cannot create raidgroup with 1 disk when using raid type raid4.",
                "If the disk_count % raid_size == 1, only disk_count/raid_size * raid_size will be added.",
                "If disk_count is 6, raid_type is raid4, raid_size 4, all 6 disks will be added.",
                "If disk_count is 5, raid_type is raid4, raid_size 4, 5/4 * 4 = 4 will be added. 1 will not be added.",
                "With REST, C(nodes) is required if C(disk_count) is present."
            ],
            "type": "int"
        },
        "disk_size": {
            "description": [
                "Disk size to use in 4K block size.  Disks within 10% of specified size will be used.",
                "With REST, this is converted to bytes using 4096.  Use C(disk_size_with_unit) to skip the conversion."
            ],
            "type": "int",
            "version_added": "2.7.0"
        },
        "disk_size_with_unit": {
            "description": [
                "Disk size to use in the specified unit.",
                "It is a positive integer number followed by unit of T/G/M/K. For example, 72G, 1T and 32M.",
                "Or the unit can be omitted for bytes (REST also accepts B).",
                "This option is ignored if a specific list of disks is specified through the \"disks\" parameter.",
                "You must only use one of either \"disk-size\" or \"disk-size-with-unit\" parameters.",
                "With REST, this is converted to bytes, assuming K=1024."
            ],
            "type": "str"
        },
        "raid_size": {
            "description": [
                "Sets the maximum number of drives per raid group."
            ],
            "type": "int",
            "version_added": "2.7.0"
        },
        "raid_type": {
            "description": [
                "Specifies the type of RAID groups to use in the new aggregate.",
                "raid_0 is only available on ONTAP Select."
            ],
            "choices": [
                "raid4",
                "raid_dp",
                "raid_tec",
                "raid_0"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "unmount_volumes": {
            "description": [
                "If set to \"true\", this option specifies that all of the volumes hosted by the given aggregate are to be unmounted before the offline operation is executed.",
                "By default, the system will reject any attempt to offline an aggregate that hosts one or more online volumes.",
                "Not supported with REST, by default REST unmount volumes when trying to offline aggregate."
            ],
            "type": "bool"
        },
        "disks": {
            "description": [
                "Specific list of disks to use for the new aggregate.",
                "To create a \"mirrored\" aggregate with a specific list of disks, both 'disks' and 'mirror_disks' options must be supplied. Additionally, the same number of disks must be supplied in both lists.",
                "Not supported with REST."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.8.0"
        },
        "is_mirrored": {
            "description": [
                "Specifies that the new aggregate be mirrored (have two plexes).",
                "If set to true, then the indicated disks will be split across the two plexes. By default, the new aggregate will not be mirrored.",
                "This option cannot be used when a specific list of disks is supplied with either the 'disks' or 'mirror_disks' options."
            ],
            "type": "bool",
            "version_added": "2.8.0"
        },
        "mirror_disks": {
            "description": [
                "List of mirror disks to use. It must contain the same number of disks specified in 'disks'.",
                "Not supported with REST."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.8.0"
        },
        "spare_pool": {
            "description": [
                "Specifies the spare pool from which to select spare disks to use in creation of a new aggregate.",
                "Not supported with REST."
            ],
            "choices": [
                "Pool0",
                "Pool1"
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "wait_for_online": {
            "description": [
                "Set this parameter to 'true' for synchronous execution during create (wait until aggregate status is online).",
                "Set this parameter to 'false' for asynchronous execution.",
                "For asynchronous, execution exits as soon as the request is sent, without checking aggregate status.",
                "Ignored with REST (always wait)."
            ],
            "type": "bool",
            "default": false,
            "version_added": "2.8.0"
        },
        "time_out": {
            "description": [
                "time to wait for aggregate creation in seconds.",
                "default is set to 100 seconds."
            ],
            "type": "int",
            "default": 100,
            "version_added": "2.8.0"
        },
        "object_store_name": {
            "description": [
                "Name of the object store configuration attached to the aggregate."
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "allow_flexgroups": {
            "description": [
                "This optional parameter allows attaching object store to an aggregate containing FlexGroup constituents. The default value is false.",
                "Mixing FabricPools and non-FabricPools within a FlexGroup is not recommended.",
                "All aggregates hosting constituents of a FlexGroup should be attached to the object store."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "snaplock_type": {
            "description": [
                "Type of snaplock for the aggregate being created."
            ],
            "choices": [
                "compliance",
                "enterprise",
                "non_snaplock"
            ],
            "type": "str",
            "version_added": "20.1.0"
        },
        "ignore_pool_checks": {
            "description": [
                "only valid when I(disks) option is used.",
                "disks in a plex should belong to the same spare pool, and mirror disks to another spare pool.",
                "when set to true, these checks are ignored.",
                "Ignored with REST as I(disks) is not supported."
            ],
            "type": "bool",
            "version_added": "20.8.0"
        },
        "encryption": {
            "description": [
                "whether to enable software encryption.",
                "this is equivalent to -encrypt-with-aggr-key when using the CLI.",
                "requires a VE license."
            ],
            "type": "bool",
            "version_added": "21.14.0"
        },
        "tags": {
            "description": [
                "Tags are an optional way to track the uses of a resource.",
                "Tag values must be formatted as key:value strings, example [\"team:csi\", \"environment:test\"]"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "22.6.0"
        }
    },
    "netapp.ontap.na_ontap_autosupport": {
        "state": {
            "description": [
                "Specifies whether the AutoSupport daemon is present or absent.",
                "When this setting is absent, delivery of all AutoSupport messages is turned off."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "node_name": {
            "description": [
                "The name of the filer that owns the AutoSupport Configuration."
            ],
            "required": true,
            "type": "str"
        },
        "transport": {
            "description": [
                "The name of the transport protocol used to deliver AutoSupport messages."
            ],
            "choices": [
                "http",
                "https",
                "smtp"
            ],
            "type": "str"
        },
        "noteto": {
            "description": [
                "Specifies up to five recipients of short AutoSupport e-mail messages."
            ],
            "type": "list",
            "elements": "str"
        },
        "post_url": {
            "description": [
                "The URL used to deliver AutoSupport messages via HTTP POST."
            ],
            "type": "str"
        },
        "mail_hosts": {
            "description": [
                "List of mail server(s) used to deliver AutoSupport messages via SMTP.",
                "Both host names and IP addresses may be used as valid input."
            ],
            "type": "list",
            "elements": "str"
        },
        "support": {
            "description": [
                "Specifies whether AutoSupport notification to technical support is enabled."
            ],
            "type": "bool"
        },
        "from_address": {
            "description": [
                "specify the e-mail address from which the node sends AutoSupport messages."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "partner_addresses": {
            "description": [
                "Specifies up to five partner vendor recipients of full AutoSupport e-mail messages."
            ],
            "version_added": "2.8.0",
            "type": "list",
            "elements": "str"
        },
        "to_addresses": {
            "description": [
                "Specifies up to five recipients of full AutoSupport e-mail messages."
            ],
            "version_added": "2.8.0",
            "type": "list",
            "elements": "str"
        },
        "proxy_url": {
            "description": [
                "specify an HTTP or HTTPS proxy if the 'transport' parameter is set to HTTP or HTTPS and your organization uses a proxy.",
                "If authentication is required, use the format \"username:password@host:port\"."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "hostname_in_subject": {
            "description": [
                "Specify whether the hostname of the node is included in the subject line of the AutoSupport message."
            ],
            "type": "bool",
            "version_added": "2.8.0"
        },
        "nht_data_enabled": {
            "description": [
                "Specify whether the disk health data is collected as part of the AutoSupport data."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "perf_data_enabled": {
            "description": [
                "Specify whether the performance data is collected as part of the AutoSupport data."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "retry_count": {
            "description": [
                "Specify the maximum number of delivery attempts for an AutoSupport message."
            ],
            "type": "int",
            "version_added": "21.5.0"
        },
        "reminder_enabled": {
            "description": [
                "Specify whether AutoSupport reminders are enabled or disabled."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "max_http_size": {
            "description": [
                "Specify delivery size limit for the HTTP transport protocol (in bytes)."
            ],
            "type": "int",
            "version_added": "21.5.0"
        },
        "max_smtp_size": {
            "description": [
                "Specify delivery size limit for the SMTP transport protocol (in bytes)."
            ],
            "type": "int",
            "version_added": "21.5.0"
        },
        "private_data_removed": {
            "description": [
                "Specify the removal of customer-supplied data."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "local_collection_enabled": {
            "description": [
                "Specify whether collection of AutoSupport data when the AutoSupport daemon is disabled."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "ondemand_enabled": {
            "description": [
                "Specify whether the AutoSupport OnDemand Download feature is enabled."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        },
        "validate_digital_certificate": {
            "description": [
                "When set to true each node will validate the digital certificates that it receives."
            ],
            "type": "bool",
            "version_added": "21.5.0"
        }
    },
    "netapp.ontap.na_ontap_autosupport_invoke": {
        "name": {
            "description": [
                "The name of the node to send the message to.",
                "Not specifying this option invokes AutoSupport on all nodes in the cluster."
            ],
            "type": "str"
        },
        "autosupport_message": {
            "description": [
                "Text sent in the subject line of the AutoSupport message.",
                "message is deprecated and will be removed to avoid a conflict with an Ansible internal variable."
            ],
            "type": "str",
            "aliases": [
                "message"
            ],
            "version_added": "20.8.0"
        },
        "type": {
            "description": [
                "Type of AutoSupport Collection to Issue."
            ],
            "choices": [
                "test",
                "performance",
                "all"
            ],
            "default": "all",
            "type": "str"
        },
        "uri": {
            "description": [
                "send the AutoSupport message to the destination you specify instead of the configured destination."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_bgp_config": {
        "state": {
            "description": [
                "Specifies whether to create/ update or delete the border gateway protocol (BGP) configuration for a node."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "node": {
            "description": [
                "Specifies the node on which configuration details will be managed."
            ],
            "required": true,
            "type": "str"
        },
        "asn": {
            "description": [
                "Specifies the autonomous system number (ASN). The ASN attribute is a positive integer of the range from 1 to 4,294,967,295.",
                "It should typically be chosen from RFC6996 \"Autonomous System (AS) Reservation for Private Use\" or the AS number assigned to the operator's organization."
            ],
            "type": "int"
        },
        "hold_time": {
            "description": [
                "Specifies the hold time in seconds. The default value is 180."
            ],
            "type": "int",
            "default": 180
        },
        "router_id": {
            "description": [
                "Specifies the local router ID. The router-id value takes the form of an IPv4 address.",
                "The default router-id will be initialized using a local IPv4 address in admin vserver if not given for create operation."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_bgp_peer_group": {
        "state": {
            "description": [
                "Create or delete BGP peer group."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Name of the BGP peer group."
            ],
            "type": "str",
            "required": true
        },
        "from_name": {
            "description": [
                "Name of the existing BGP peer group to be renamed to C(name)."
            ],
            "type": "str"
        },
        "ipspace": {
            "description": [
                "IPSpace name, cannot be modified after creation."
            ],
            "type": "str"
        },
        "local": {
            "description": [
                "Information describing the local interface that is being used to peer with a router using BGP.",
                "When creating BGP peer group, an existing BGP interface is used by specifying the interface, or create a new one by specifying the port and IP address.",
                "Cannot be modified after creation."
            ],
            "type": "dict",
            "suboptions": {
                "interface": {
                    "description": [
                        "An existing BGP interface.",
                        "If interface not found, module will try to create BGP interface using C(local.ip) and C(local.port)."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "name": {
                            "description": [
                                "BGP interface name."
                            ],
                            "type": "str"
                        }
                    }
                },
                "ip": {
                    "description": [
                        "IP information, requird to create a new interface."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "address": {
                            "description": [
                                "IPv4 or IPv6 address, example 10.10.10.7."
                            ],
                            "type": "str"
                        },
                        "netmask": {
                            "description": [
                                "Input as netmask length (16) or IPv4 mask (255.255.0.0).",
                                "For IPv6, the default value is 64 with a valid range of 1 to 127."
                            ],
                            "type": "str"
                        }
                    }
                },
                "port": {
                    "description": [
                        "Port and node information, required to create a new interface."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "name": {
                            "description": [
                                "Port name."
                            ],
                            "type": "str"
                        },
                        "node": {
                            "description": [
                                "Name of node on which the port is located."
                            ],
                            "type": "dict",
                            "suboptions": {
                                "name": {
                                    "description": [
                                        "Node name"
                                    ],
                                    "type": "str"
                                }
                            }
                        }
                    }
                }
            }
        },
        "peer": {
            "description": [
                "Information describing the router to peer with"
            ],
            "type": "dict",
            "suboptions": {
                "address": {
                    "description": [
                        "Peer router address."
                    ],
                    "type": "str"
                },
                "asn": {
                    "description": [
                        "Autonomous system number of peer.",
                        "Cannot be modified after creation."
                    ],
                    "type": "int"
                }
            }
        },
        "use_peer_as_next_hop": {
            "description": [
                "Specifies whether the peer group uses the peer address as a next hop route.",
                "This field requires ONTAP version 9.9 or later."
            ],
            "type": "bool",
            "version_added": "22.12.0"
        }
    },
    "netapp.ontap.na_ontap_broadcast_domain": {
        "state": {
            "description": [
                "Whether the specified broadcast domain should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specify the broadcast domain name."
            ],
            "required": true,
            "aliases": [
                "broadcast_domain"
            ],
            "type": "str"
        },
        "from_name": {
            "description": [
                "Specify the broadcast domain name to be split into new broadcast domain."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "mtu": {
            "description": [
                "Specify the required mtu for the broadcast domain."
            ],
            "type": "int"
        },
        "ipspace": {
            "description": [
                "Specify the required ipspace for the broadcast domain.",
                "With ZAPI, a domain ipspace cannot be modified after the domain has been created.",
                "With REST, a domain ipspace can be modified.",
                "This option is required while using REST."
            ],
            "type": "str"
        },
        "from_ipspace": {
            "description": [
                "if used with C(from_name), it will try to find broadcast domain C(from_name) in C(from_ipspace), split action either rename broadcast_domain and ipspace or create a new broadcast domain.",
                "If not C(from_name) present, it will try to find C(name) broadcast domain in C(from_ipspace) and modify ipspace using C(ipspace).",
                "Only supported with REST."
            ],
            "version_added": "2.15.0",
            "type": "str"
        },
        "ports": {
            "description": [
                "Specify the ports associated with this broadcast domain. Should be comma separated.",
                "It represents the expected state of a list of ports at any time.",
                "Add a port if it is specified in expected state but not in current state.",
                "Delete a port if it is specified in current state but not in expected state.",
                "For split action, it represents the ports to be split from current broadcast domain and added to the new broadcast domain.",
                "If all ports are removed or split from a broadcast domain, the broadcast domain will be deleted automatically.",
                "With REST, if exact match of ports found with C(from_name), split action will rename the broadcast domain using C(name).",
                "With REST, if partial match of ports with C(from_name), split action will create a new broadcast domain using C(name) and move partial matched ports from C(from_name) to C(name).",
                "With REST, if C(ports) not in C(from_name), split action will create a new broadcast domain using C(name) with C(ports)."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_broadcast_domain_ports": {
        "state": {
            "description": [
                "Whether the specified broadcast domain should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "broadcast_domain": {
            "description": [
                "Specify the broadcast_domain name"
            ],
            "required": true,
            "type": "str"
        },
        "ipspace": {
            "description": [
                "Specify the ipspace for the broadcast domain"
            ],
            "type": "str"
        },
        "ports": {
            "description": [
                "Specify the list of ports to add to or remove from this broadcast domain."
            ],
            "required": true,
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_cg_snapshot": {
        "state": {
            "description": [
                "Specifies whether to create  or delete the snapshot.",
                "Choice 'absent' is valid only with REST."
            ],
            "default": "present",
            "choices": [
                "present",
                "absent"
            ],
            "type": "str"
        },
        "vserver": {
            "required": true,
            "type": "str",
            "description": [
                "Name of the vserver."
            ]
        },
        "volumes": {
            "required": false,
            "type": "list",
            "elements": "str",
            "description": [
                "A list of volumes in this filer that is part of this CG operation.",
                "Required with ZAPI."
            ]
        },
        "consistency_group": {
            "required": false,
            "type": "str",
            "description": [
                "Name of the consistency group for which snapshot needs to be created or deleted.",
                "Valid only with REST."
            ],
            "version_added": "22.8.0"
        },
        "snapshot": {
            "required": true,
            "type": "str",
            "description": [
                "The provided name of the snapshot that is created in each volume."
            ]
        },
        "timeout": {
            "description": [
                "Timeout selector.",
                "Not supported with REST."
            ],
            "choices": [
                "urgent",
                "medium",
                "relaxed"
            ],
            "type": "str",
            "default": "medium"
        },
        "snapmirror_label": {
            "description": [
                "A human readable SnapMirror label to be attached with the consistency group snapshot copies."
            ],
            "type": "str"
        },
        "comment": {
            "description": [
                "Comment for the snapshot copy.",
                "Only supported with REST."
            ],
            "type": "str",
            "version_added": "22.8.0"
        }
    },
    "netapp.ontap.na_ontap_cifs": {
        "comment": {
            "description": [
                "The CIFS share description."
            ],
            "type": "str",
            "version_added": "21.7.0"
        },
        "path": {
            "description": [
                "The file system path that is shared through this CIFS share. The path is the full, user visible path relative to the vserver root, and it might be crossing junction mount points. The path is in UTF8 and uses forward slash as directory separator."
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "Vserver containing the CIFS share."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the CIFS share. The CIFS share name is a UTF-8 string with the following characters being illegal; control characters from 0x00 to 0x1F, both inclusive, 0x22 (double quotes)"
            ],
            "required": true,
            "aliases": [
                "share_name"
            ],
            "type": "str"
        },
        "share_properties": {
            "description": [
                "The list of properties for the CIFS share.",
                "Not supported with REST.",
                "share-properties are separate fields in the REST API.",
                "You can achieve this functionality by setting C(access_based_enumeration), C(change_notify), C(encryption), C(home_directory), C(oplocks), C(show_snapshot), C(continuously_available) and C(namespace_caching)."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.8.0"
        },
        "symlink_properties": {
            "description": [
                "The list of symlink properties for this CIFS share.",
                "Not supported with REST, this option is replaced with C(unix_symlink) in REST."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.8.0"
        },
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified CIFS share should exist or not."
            ],
            "type": "str",
            "default": "present"
        },
        "vscan_fileop_profile": {
            "choices": [
                "no_scan",
                "standard",
                "strict",
                "writes_only"
            ],
            "description": [
                "Profile_set of file_ops to which vscan on access scanning is applicable.",
                "REST support requires ONTAP 9.15.1 or later."
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "unix_symlink": {
            "choices": [
                "local",
                "widelink",
                "disable"
            ],
            "description": [
                "The list of unix_symlink properties for this CIFS share",
                "This option only supported with REST."
            ],
            "type": "str",
            "version_added": "21.19.0"
        },
        "access_based_enumeration": {
            "description": [
                "If enabled, all folders inside this share are visible to a user based on that individual user access right; prevents the display of folders or other shared resources that the user does not have access to.",
                "This option only supported with REST."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "allow_unencrypted_access": {
            "description": [
                "Specifies whether or not the SMB2 clients are allowed to access the encrypted share.",
                "This option requires REST and ONTAP 9.11.0 or later."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "change_notify": {
            "description": [
                "Specifies whether CIFS clients can request for change notifications for directories on this share.",
                "This option only supported with REST."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "encryption": {
            "description": [
                "Specifies that SMB encryption must be used when accessing this share. Clients that do not support encryption are not able to access this share.",
                "This option only supported with REST."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "home_directory": {
            "description": [
                "Specifies whether or not the share is a home directory share, where the share and path names are dynamic.",
                "ONTAP home directory functionality automatically offer each user a dynamic share to their home directory without creating an individual SMB share for each user.",
                "This feature enable us to configure a share that maps to different directories based on the user that connects to it",
                "Instead of creating a separate shares for each user, a single share with a home directory parameters can be created.",
                "In a home directory share, ONTAP dynamically generates the share-name and share-path by substituting %w, %u, and %d variables with the corresponding Windows user name, UNIX user name, and domain name, respectively.",
                "This option only supported with REST and cannot modify."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "namespace_caching": {
            "description": [
                "Specifies whether or not the SMB clients connecting to this share can cache the directory enumeration results returned by the CIFS servers.",
                "This option requires REST and ONTAP 9.10.1 or later."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "oplocks": {
            "description": [
                "Specify whether opportunistic locks are enabled on this share. \"Oplocks\" allow clients to lock files and cache content locally, which can increase performance for file operations.",
                "Only supported with REST."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "show_snapshot": {
            "description": [
                "Specifies whether or not the Snapshot copies can be viewed and traversed by clients.",
                "This option requires REST and ONTAP 9.10.1 or later."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "continuously_available": {
            "description": [
                "Specifies whether or not the clients connecting to this share can open files in a persistent manner.",
                "Files opened in this way are protected from disruptive events, such as, failover and giveback.",
                "This option requires REST and ONTAP 9.10.1 or later."
            ],
            "type": "bool",
            "version_added": "22.3.0"
        },
        "browsable": {
            "description": [
                "Specifies whether or not the Windows clients can browse the share.",
                "This option requires REST and ONTAP 9.13.1 or later."
            ],
            "type": "bool",
            "version_added": "22.5.0"
        },
        "show_previous_versions": {
            "description": [
                "Specifies that the previous version can be viewed and restored from the client.",
                "This option requires REST and ONTAP 9.13.1 or later."
            ],
            "type": "bool",
            "version_added": "22.5.0"
        },
        "offline_files": {
            "choices": [
                "none",
                "manual",
                "documents",
                "programs"
            ],
            "description": [
                "Allows Windows clients to cache data on this share.",
                "This option is only supported with REST and requires ONTAP 9.10 or later."
            ],
            "type": "str",
            "version_added": "22.11.0"
        }
    },
    "netapp.ontap.na_ontap_cifs_acl": {
        "permission": {
            "choices": [
                "no_access",
                "read",
                "change",
                "full_control"
            ],
            "type": "str",
            "description": [
                "The access rights that the user or group has on the defined CIFS share."
            ]
        },
        "share_name": {
            "description": [
                "The name of the cifs-share-access-control to manage."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "share"
            ]
        },
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified CIFS share acl should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "user_or_group": {
            "description": [
                "The user or group name for which the permissions are listed."
            ],
            "required": true,
            "type": "str"
        },
        "type": {
            "description": [
                "The type (also known as user-group-type) of the user or group to add to the ACL.",
                "Type is required for create, delete and modify unix-user or unix-group to/from the ACL in ZAPI."
            ],
            "type": "str",
            "choices": [
                "windows",
                "unix_user",
                "unix_group"
            ],
            "version_added": "21.17.0"
        }
    },
    "netapp.ontap.na_ontap_cifs_local_group": {
        "state": {
            "description": [
                "Whether the specified member should be part of the CIFS local group"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver that owns the CIFS local group"
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies name of the CIFS local group"
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Specifies the existing cifs local group name.",
                "This option is used to rename cifs local group."
            ],
            "type": "str"
        },
        "description": {
            "description": [
                "Description for the local group."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_cifs_local_group_member": {
        "state": {
            "description": [
                "Whether the specified member should be part of the CIFS local group"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver that owns the CIFS local group"
            ],
            "required": true,
            "type": "str"
        },
        "group": {
            "description": [
                "Specifies name of the CIFS local group"
            ],
            "required": true,
            "type": "str"
        },
        "member": {
            "description": [
                "Specifies the name of the member"
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_cifs_local_user": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified CIFS share should exist or not."
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the local cifs user"
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "account_disabled": {
            "description": [
                "Whether the local cifs user is disabled or not"
            ],
            "type": "bool"
        },
        "description": {
            "description": [
                "the description for the local cifs user"
            ],
            "type": "str"
        },
        "full_name": {
            "description": [
                "the full name for the local cifs user"
            ],
            "type": "str"
        },
        "user_password": {
            "description": [
                "Password for new user"
            ],
            "type": "str"
        },
        "set_password": {
            "description": [
                "Modify the existing user password",
                "Module is not idempotent when set to True"
            ],
            "type": "bool",
            "default": false
        }
    },
    "netapp.ontap.na_ontap_cifs_local_user_modify": {
        "name": {
            "description": [
                "The name of the local cifs user"
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "is_account_disabled": {
            "description": [
                "Whether the local cifs user is disabled or not"
            ],
            "type": "bool"
        },
        "description": {
            "description": [
                "the description for the local cifs user"
            ],
            "type": "str"
        },
        "full_name": {
            "description": [
                "the full name for the local cifs user"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_cifs_local_user_set_password": {
        "vserver": {
            "description": [
                "name of the vserver."
            ],
            "required": true,
            "type": "str"
        },
        "user_name": {
            "description": [
                "The name of the local CIFS user to set the password for."
            ],
            "required": true,
            "type": "str"
        },
        "user_password": {
            "description": [
                "The password to set for the local CIFS user."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_cifs_privileges": {
        "state": {
            "description": [
                "Specifies whether to add/update or reset the specified CIFS privileges."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the local or Active Directory user or group name."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "privileges": {
            "description": [
                "Specifies the list of privileges to be retained for a user or group.",
                "SeTcbPrivilege - Allows user to act as part of the operating system",
                "SeBackupPrivilege - Allows user to back up files and directories, overriding any ACLs",
                "SeRestorePrivilege - Allows user to restore files and directories, overriding any ACLs",
                "SeTakeOwnershipPrivilege - Allows user to take ownership of files or other objects",
                "SeSecurityPrivilege - Allows user to manage auditing and viewing/dumping/clearing the security log",
                "SeChangeNotifyPrivilege - Allows user to bypass traverse checking"
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_cifs_server": {
        "state": {
            "description": [
                "Whether the specified cifs_server should exist or not."
            ],
            "default": "present",
            "choices": [
                "present",
                "absent"
            ],
            "type": "str"
        },
        "service_state": {
            "description": [
                "CIFS Server Administrative Status."
            ],
            "choices": [
                "stopped",
                "started"
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the cifs_server name."
            ],
            "required": true,
            "aliases": [
                "cifs_server_name"
            ],
            "type": "str"
        },
        "comment": {
            "description": [
                "A descriptive text comment for the CIFS server.",
                "SMB clients can see the CIFS server comment when browsing servers on the network.",
                "Only supported with REST."
            ],
            "type": "str",
            "version_added": "22.13.0"
        },
        "admin_user_name": {
            "description": [
                "Specifies the cifs server admin username.",
                "When used with absent, the account will be deleted if admin_password is also provided."
            ],
            "type": "str"
        },
        "admin_password": {
            "description": [
                "Specifies the cifs server admin password.",
                "When used with absent, the account will be deleted if admin_user_name is also provided."
            ],
            "type": "str"
        },
        "domain": {
            "description": [
                "The Fully Qualified Domain Name of the Windows Active Directory this CIFS server belongs to."
            ],
            "type": "str"
        },
        "workgroup": {
            "description": [
                "The NetBIOS name of the domain or workgroup this CIFS server belongs to."
            ],
            "type": "str"
        },
        "ou": {
            "description": [
                "The Organizational Unit (OU) within the Windows Active Directory this CIFS server belongs to."
            ],
            "version_added": "2.7.0",
            "type": "str"
        },
        "default_site": {
            "description": [
                "Specifies the site within the Active Directory domain to associate with the CIFS server if Data ONTAP cannot determine an appropriate site.",
                "Only supported with REST and requires ontap version 9.13.1 or later."
            ],
            "version_added": "22.8.0",
            "type": "str"
        },
        "force": {
            "type": "bool",
            "description": [
                "When state is present, if this is set and a machine account with the same name as specified in 'name' exists in the Active Directory, it will be overwritten and reused.",
                "When state is absent, if this is set, the local CIFS configuration is deleted regardless of communication errors.",
                "For REST, it requires ontap version 9.11."
            ],
            "version_added": "2.7.0"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Specifies the existing cifs_server name.",
                "This option is used to rename cifs_server.",
                "Supported only in REST and requires force to be set to True.",
                "Requires ontap version 9.11.0.",
                "if the service is running, it will be stopped to perform the rename action, and automatically restarts.",
                "if the service is stopped, it will be briefly restarted after the rename action, and stopped again."
            ],
            "type": "str",
            "version_added": "21.19.0"
        },
        "encrypt_dc_connection": {
            "description": [
                "Specifies whether encryption is required for domain controller connections.",
                "Only supported with REST and requires ontap version 9.8 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "kdc_encryption": {
            "description": [
                "Specifies whether AES-128 and AES-256 encryption is enabled for all Kerberos-based communication with the Active Directory KDC.",
                "Only supported with REST. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "smb_encryption": {
            "description": [
                "Determine whether SMB encryption is required for incoming CIFS traffic.",
                "Only supported with REST. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "smb_signing": {
            "description": [
                "Specifies whether signing is required for incoming CIFS traffic.",
                "Only supported with REST. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "restrict_anonymous": {
            "description": [
                "Specifies what level of access an anonymous user is granted.",
                "Only supported with REST."
            ],
            "choices": [
                "no_enumeration",
                "no_restriction",
                "no_access"
            ],
            "type": "str",
            "version_added": "21.20.0"
        },
        "aes_netlogon_enabled": {
            "description": [
                "Specifies whether or not an AES session key is enabled for the Netlogon channel.",
                "Only supported with REST and requires ontap version 9.10.1 or later."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "ldap_referral_enabled": {
            "description": [
                "Specifies whether or not LDAP referral chasing is enabled for AD LDAP connections.",
                "Only supported with REST and requires ontap version 9.10.1 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "use_ldaps": {
            "description": [
                "Specifies whether or not to use use LDAPS for secure Active Directory LDAP connections.",
                "Only supported with REST and requires ontap version 9.10.1 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "use_start_tls": {
            "description": [
                "Specifies whether or not to use SSL/TLS for allowing secure LDAP communication with Active Directory LDAP servers.",
                "Only supported with REST and requires ontap version 9.10.1 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "try_ldap_channel_binding": {
            "description": [
                "Specifies whether or not channel binding is attempted in the case of TLS/LDAPS.",
                "Only supported with REST and requires ontap version 9.10.1 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "session_security": {
            "description": [
                "Specifies client session security for AD LDAP connections.",
                "Only supported with REST and requires ontap version 9.10.1 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "choices": [
                "none",
                "sign",
                "seal"
            ],
            "type": "str",
            "version_added": "21.20.0"
        },
        "lm_compatibility_level": {
            "description": [
                "Specifies CIFS server minimum security level, also known as the LMCompatibilityLevel.",
                "Only supported with REST and requires ontap version 9.8 or later. Use na_ontap_vserver_cifs_security with ZAPI."
            ],
            "choices": [
                "lm_ntlm_ntlmv2_krb",
                "ntlm_ntlmv2_krb",
                "ntlmv2_krb",
                "krb"
            ],
            "type": "str",
            "version_added": "22.9.0"
        },
        "is_multichannel_enabled": {
            "description": [
                "Specifies whether the CIFS server supports Multichannel or not.",
                "Only supported with REST and requires ontap version 9.10 or later."
            ],
            "type": "bool",
            "version_added": "22.10.0"
        }
    },
    "netapp.ontap.na_ontap_cifs_unix_symlink_mapping": {
        "state": {
            "description": [
                "Whether the specified symlink mapping should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "unix_path": {
            "description": [
                "Specifies the UNIX path prefix to be matched for the mapping.",
                "It must begin and end with a forward slash (/)."
            ],
            "type": "str",
            "required": true
        },
        "share_name": {
            "description": [
                "Specifies the CIFS share name on the destination CIFS server to which the UNIX symbolic link is pointing."
            ],
            "type": "str"
        },
        "cifs_server": {
            "description": [
                "Specifies the destination CIFS server (DNS name, IP address, or NetBIOS name).",
                "This field is mandatory if the locality of the symbolic link is 'widelink'."
            ],
            "type": "str"
        },
        "cifs_path": {
            "description": [
                "Specifies the CIFS path on the destination to which the symbolic link maps.",
                "Note that this value is specified by using a UNIX-style path. It must begin and end with a forward slash (/)."
            ],
            "type": "str"
        },
        "locality": {
            "description": [
                "Specifies whether the CIFS symbolic link is a local link or wide link. The default setting is local.",
                "The following values are supported local - Local symbolic link maps only to the same CIFS share. widelink - Wide symbolic link maps to any CIFS share on the network."
            ],
            "type": "str",
            "choices": [
                "local",
                "widelink"
            ],
            "default": "local"
        },
        "home_directory": {
            "description": [
                "Specify if the destination share is a home directory. The default value is false."
            ],
            "type": "bool",
            "default": false
        }
    },
    "netapp.ontap.na_ontap_cli_timeout": {
        "state": {
            "description": [
                "Modify timeout value, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "timeout": {
            "description": [
                "Specifies the timeout value, in minutes.",
                "To prevent CLI sessions from timing out, specify a value of 0 (zero)."
            ],
            "type": "int",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_cluster": {
        "state": {
            "description": [
                "Whether the specified cluster should exist (deleting a cluster is not supported).",
                "Whether the node identified by its cluster_ip_address should be in the cluster or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "cluster_name": {
            "description": [
                "The name of the cluster to manage."
            ],
            "type": "str"
        },
        "cluster_ip_address": {
            "description": [
                "intra cluster IP address of the node to be added or removed."
            ],
            "type": "str"
        },
        "single_node_cluster": {
            "description": [
                "Whether the cluster is a single node cluster.  Ignored for 9.3 or older versions.",
                "If present, it was observed that 'Cluster' interfaces were deleted, whatever the value with ZAPI."
            ],
            "version_added": "19.11.0",
            "type": "bool"
        },
        "cluster_location": {
            "description": [
                "Cluster location, only relevant if performing a modify action."
            ],
            "version_added": "19.11.0",
            "type": "str"
        },
        "cluster_contact": {
            "description": [
                "Cluster contact, only relevant if performing a modify action."
            ],
            "version_added": "19.11.0",
            "type": "str"
        },
        "node_name": {
            "description": [
                "Name of the node to be added or removed from the cluster.",
                "Be aware that when adding a node, '-' are converted to '_' by the ONTAP backend.",
                "When creating a cluster, C(node_name) is ignored.",
                "When adding a node using C(cluster_ip_address), C(node_name) is optional.",
                "When used to remove a node, C(cluster_ip_address) and C(node_name) are mutually exclusive."
            ],
            "version_added": "20.9.0",
            "type": "str"
        },
        "time_out": {
            "description": [
                "time to wait for cluster creation in seconds.",
                "Error out if task is not completed in defined time.",
                "if 0, the request is asynchronous.",
                "default is set to 3 minutes."
            ],
            "default": 180,
            "type": "int",
            "version_added": "21.1.0"
        },
        "force": {
            "description": [
                "forcibly remove a node that is down and cannot be brought online to remove its shared resources."
            ],
            "default": false,
            "type": "bool",
            "version_added": "21.13.0"
        },
        "timezone": {
            "description": "timezone for the cluster. Only supported by REST.",
            "type": "dict",
            "version_added": "21.24.0",
            "suboptions": {
                "name": {
                    "type": "str",
                    "description": [
                        "The timezone name must be",
                        "A geographic region, usually expressed as area/location",
                        "Greenwich Mean Time (GMT) or the difference in hours from GMT",
                        "A valid alias; that is, a term defined by the standard to refer to a geographic region or GMT",
                        "A system-specific or other term not associated with a geographic region or GMT",
                        "full list of supported alias can be found here: https://library.netapp.com/ecmdocs/ECMP1155590/html/GUID-D3B8A525-67A2-4BEE-99DB-EF52D6744B5F.html",
                        "Only supported by REST"
                    ]
                }
            }
        },
        "certificate": {
            "description": [
                "Certificate used by cluster and node management interfaces for TLS connection requests.",
                "Only supported with REST and requires ONTAP 9.10 or later."
            ],
            "type": "dict",
            "version_added": "22.9.0",
            "suboptions": {
                "uuid": {
                    "type": "str",
                    "description": [
                        "Certificate UUID."
                    ]
                }
            }
        }
    },
    "netapp.ontap.na_ontap_cluster_ha": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "description": [
                "Whether HA on cluster should be enabled or disabled."
            ],
            "default": "present"
        }
    },
    "netapp.ontap.na_ontap_cluster_peer": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "description": [
                "Whether the specified cluster peer should exist or not."
            ],
            "default": "present"
        },
        "source_intercluster_lifs": {
            "description": [
                "List of intercluster addresses of the source cluster.",
                "Used as peer-addresses in destination cluster.",
                "All these intercluster lifs should belong to the source cluster."
            ],
            "version_added": "2.8.0",
            "type": "list",
            "elements": "str",
            "aliases": [
                "source_intercluster_lif"
            ]
        },
        "dest_intercluster_lifs": {
            "description": [
                "List of intercluster addresses of the destination cluster.",
                "Used as peer-addresses in source cluster.",
                "All these intercluster lifs should belong to the destination cluster."
            ],
            "version_added": "2.8.0",
            "type": "list",
            "elements": "str",
            "aliases": [
                "dest_intercluster_lif"
            ]
        },
        "passphrase": {
            "description": [
                "The arbitrary passphrase that matches the one given to the peer cluster."
            ],
            "type": "str"
        },
        "source_cluster_name": {
            "description": [
                "The name of the source cluster name in the peer relation to be modified or deleted.",
                "Required for deleting peer relation and for modifying source_intercluster_lifs."
            ],
            "type": "str"
        },
        "dest_cluster_name": {
            "description": [
                "The name of the destination cluster name in the peer relation to be modified or deleted.",
                "Required for deleting peer relation and for modifying dest_intercluster_lifs."
            ],
            "type": "str"
        },
        "dest_hostname": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination cluster IP or hostname which needs to be peered.",
                "Required to complete the peering process at destination cluster."
            ],
            "type": "str"
        },
        "dest_username": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination username.",
                "Optional if this is same as source username or if a certificate is used."
            ],
            "type": "str"
        },
        "dest_password": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination password.",
                "Optional if this is same as source password or if a certificate is used.."
            ],
            "type": "str"
        },
        "ipspace": {
            "description": [
                "IPspace of the local intercluster LIFs.",
                "Assumes Default IPspace if not provided."
            ],
            "type": "str",
            "version_added": "20.11.0"
        },
        "encryption_protocol_proposed": {
            "description": [
                "Encryption protocol to be used for inter-cluster communication.",
                "Only available on ONTAP 9.5 or later."
            ],
            "choices": [
                "tls_psk",
                "none"
            ],
            "type": "str",
            "version_added": "20.5.0"
        }
    },
    "netapp.ontap.na_ontap_command": {
        "command": {
            "description": [
                "a comma separated list containing the command and arguments."
            ],
            "required": true,
            "type": "list",
            "elements": "str"
        },
        "privilege": {
            "description": [
                "privilege level at which to run the command."
            ],
            "choices": [
                "admin",
                "advanced"
            ],
            "default": "admin",
            "type": "str",
            "version_added": "2.8.0"
        },
        "return_dict": {
            "description": [
                "Returns a parsesable dictionary instead of raw XML output",
                "C(result_value)",
                "C(status) > passed, failed.",
                "C(stdout) > command output in plaintext.",
                "C(stdout_lines) > list of command output lines.",
                "C(stdout_lines_filter) > empty list or list of command output lines matching I(include_lines) or I(exclude_lines) parameters.",
                "C(xml_dict) > JSON representation of what the CLI returned."
            ],
            "type": "bool",
            "default": false,
            "version_added": "2.9.0"
        },
        "vserver": {
            "description": [
                "If running as vserver admin, you must give a I(vserver) or module will fail"
            ],
            "version_added": "19.10.0",
            "type": "str"
        },
        "include_lines": {
            "description": [
                "applied only when I(return_dict) is true",
                "return only lines containing string pattern in C(stdout_lines_filter)"
            ],
            "default": "",
            "type": "str",
            "version_added": "19.10.0"
        },
        "exclude_lines": {
            "description": [
                "applied only when I(return_dict) is true",
                "return only lines containing string pattern in C(stdout_lines_filter)"
            ],
            "default": "",
            "type": "str",
            "version_added": "19.10.0"
        }
    },
    "netapp.ontap.na_ontap_debug": {
        "vserver": {
            "description": [
                "The vserver name to test for ZAPI tunneling."
            ],
            "required": false,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_disks": {
        "node": {
            "required": true,
            "type": "str",
            "description": [
                "The node that we want to assign/unassign disks."
            ]
        },
        "disk_count": {
            "description": [
                "Total number of disks a node should own."
            ],
            "type": "int",
            "version_added": "2.9.0"
        },
        "disk_type": {
            "description": [
                "Assign specified type of disk (or set of disks)."
            ],
            "type": "str",
            "choices": [
                "ATA",
                "BSAS",
                "FCAL",
                "FSAS",
                "LUN",
                "MSATA",
                "SAS",
                "SSD",
                "SSD_NVM",
                "VMDISK",
                "unknown"
            ],
            "version_added": "20.6.0"
        },
        "min_spares": {
            "description": [
                "Minimum spares required per type for the node."
            ],
            "type": "int",
            "version_added": "21.7.0"
        }
    },
    "netapp.ontap.na_ontap_disk_options": {
        "node": {
            "description": [
                "The node to modify a disk option for"
            ],
            "required": true,
            "type": "str"
        },
        "bkg_firmware_update": {
            "description": [
                "Whether or not background disk firmware updates should be enabled"
            ],
            "type": "bool"
        },
        "autocopy": {
            "description": [
                "Whether or not disk auto copies should be enabled"
            ],
            "type": "bool"
        },
        "autoassign": {
            "description": [
                "Whether or not disks should be automatically assigned to a node"
            ],
            "type": "bool"
        },
        "autoassign_policy": {
            "description": [
                "the auto assign policy to use"
            ],
            "type": "str",
            "choices": [
                "default",
                "bay",
                "shelf",
                "stack"
            ]
        }
    },
    "netapp.ontap.na_ontap_dns": {
        "state": {
            "description": [
                "Whether the DNS servers should be enabled for the given vserver."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "With REST, for cluster scoped DNS, omit this option or set it to NULL for ONTAP 9.13.1 or later and provide cluster vserver as its value for ONTAP 9.12.1 or earlier.",
                "With ZAPI or REST, for cluster scoped DNS, this can also be set to the cluster vserver name."
            ],
            "type": "str"
        },
        "domains": {
            "description": [
                "List of DNS domains such as 'sales.bar.com'. The first domain is the one that the Vserver belongs to."
            ],
            "type": "list",
            "elements": "str"
        },
        "nameservers": {
            "description": [
                "List of IPv4 addresses of name servers such as '123.123.123.123'."
            ],
            "type": "list",
            "elements": "str"
        },
        "skip_validation": {
            "type": "bool",
            "description": [
                "By default, all nameservers are checked to validate they are available to resolve.",
                "If you DNS servers are not yet installed or momentarily not available, you can set this option to 'true'",
                "to bypass the check for all servers specified in nameservers field.",
                "With REST, requires ONTAP 9.9.1 or later and ignored for cluster DNS operations."
            ],
            "version_added": "2.8.0"
        }
    },
    "netapp.ontap.na_ontap_domain_tunnel": {
        "state": {
            "description": [
                "Whether the domain tunnel should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver that the domain tunnel should be created or deleted on."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_efficiency_policy": {
        "state": {
            "description": [
                "Whether the specified efficiency policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "policy_name": {
            "description": [
                "the name of the efficiency policy"
            ],
            "required": true,
            "type": "str"
        },
        "comment": {
            "description": [
                "A brief description of the policy."
            ],
            "type": "str"
        },
        "duration": {
            "description": [
                "The duration in hours for which the scheduled efficiency operation should run. After this time expires, the efficiency operation will be stopped even if the operation is incomplete. If '-' is specified as the duration, the efficiency operation will run till it completes. Otherwise, the duration has to be an integer greater than 0. By default, the operation runs till it completes."
            ],
            "type": "str"
        },
        "enabled": {
            "description": [
                "If the value is true, the efficiency policy is active in this cluster. If the value is false this policy will not be activated by the schedulers and hence will be inactive."
            ],
            "type": "bool"
        },
        "policy_type": {
            "description": [
                "The policy type reflects the reason a volume using this policy will start processing a changelog.",
                "(Changelog processing is identifying and eliminating duplicate blocks which were written since the changelog was last processed.)",
                "threshold Changelog processing occurs once the changelog reaches a certain percent full.",
                "scheduled Changelog processing will be triggered by time."
            ],
            "choices": [
                "threshold",
                "scheduled"
            ],
            "type": "str"
        },
        "qos_policy": {
            "description": [
                "QoS policy for the efficiency operation.",
                "background efficiency operation will run in background with minimal or no impact on data serving client operations,",
                "best-effort efficiency operations may have some impact on data serving client operations."
            ],
            "choices": [
                "background",
                "best_effort"
            ],
            "type": "str"
        },
        "schedule": {
            "description": [
                "Cron type job schedule name. When the associated policy is set on a volume, the efficiency operation will be triggered for the volume on this schedule.",
                "These schedules can be created using the na_ontap_job_schedule module"
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "changelog_threshold_percent": {
            "description": [
                "Specifies the percentage at which the changelog will be processed for a threshold type of policy, tested once each hour."
            ],
            "type": "int",
            "version_added": "19.11.0"
        }
    },
    "netapp.ontap.na_ontap_ems_config": {
        "state": {
            "description": [
                "modify EMS configuration, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "mail_from": {
            "description": [
                "The email address that the event notification system uses as the \"From\" address for email notifications."
            ],
            "type": "str",
            "required": false
        },
        "mail_server": {
            "description": [
                "The name or IP address of the SMTP server that the event notification system uses to send email notification of events."
            ],
            "type": "str",
            "required": false
        },
        "proxy_url": {
            "description": [
                "HTTP or HTTPS proxy server URL used by rest-api type EMS notification destinations if your organization uses a proxy."
            ],
            "type": "str",
            "required": false
        },
        "proxy_user": {
            "description": [
                "User name for the HTTP or HTTPS proxy server if authentication is required."
            ],
            "type": "str",
            "required": false
        },
        "proxy_password": {
            "description": [
                "Password for HTTP or HTTPS proxy."
            ],
            "type": "str",
            "required": false
        },
        "pubsub_enabled": {
            "description": [
                "Indicates whether or not events are published to the Publish/Subscribe messaging broker.",
                "Requires ONTAP 9.10 or later."
            ],
            "type": "bool",
            "required": false
        }
    },
    "netapp.ontap.na_ontap_ems_destination": {
        "state": {
            "description": [
                "Whether the destination should be present or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Name of the EMS destination."
            ],
            "required": true,
            "type": "str"
        },
        "type": {
            "description": [
                "Type of the EMS destination."
            ],
            "choices": [
                "email",
                "syslog",
                "rest_api"
            ],
            "required": true,
            "type": "str"
        },
        "destination": {
            "description": [
                "Destination - content depends on the type."
            ],
            "required": true,
            "type": "str"
        },
        "filters": {
            "description": [
                "List of filters that destination is linked to."
            ],
            "required": true,
            "type": "list",
            "elements": "str"
        },
        "certificate": {
            "description": [
                "Name of the certificate"
            ],
            "required": false,
            "type": "str",
            "version_added": "22.8.0"
        },
        "ca": {
            "description": [
                "Name of the CA certificate"
            ],
            "required": false,
            "type": "str",
            "version_added": "22.8.0"
        },
        "syslog": {
            "description": [
                "The parameter is specified when the EMS destination type is C(syslog)."
            ],
            "required": false,
            "version_added": "22.9.0",
            "type": "dict",
            "suboptions": {
                "transport": {
                    "choices": [
                        "udp_unencrypted",
                        "tcp_unencrypted",
                        "tcp_encrypted"
                    ],
                    "description": [
                        "Syslog Transport Protocol."
                    ],
                    "type": "str",
                    "default": "udp_unencrypted"
                },
                "timestamp_format_override": {
                    "choices": [
                        "no_override",
                        "rfc_3164",
                        "iso_8601_local_time",
                        "iso_8601_utc"
                    ],
                    "description": [
                        "Syslog Timestamp Format Override."
                    ],
                    "type": "str",
                    "default": "no_override"
                },
                "hostname_format_override": {
                    "choices": [
                        "no_override",
                        "fqdn",
                        "hostname_only"
                    ],
                    "description": [
                        "Syslog Hostname Format Override."
                    ],
                    "type": "str",
                    "default": "no_override"
                },
                "message_format": {
                    "choices": [
                        "legacy_netapp",
                        "rfc_5424"
                    ],
                    "description": [
                        "Syslog Message Format."
                    ],
                    "type": "str",
                    "default": "legacy_netapp"
                },
                "port": {
                    "description": [
                        "Syslog Port."
                    ],
                    "type": "int",
                    "default": 514
                }
            }
        }
    },
    "netapp.ontap.na_ontap_ems_filter": {
        "state": {
            "description": [
                "Whether the specified user should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Name of the EMS Filter"
            ],
            "required": true,
            "type": "str"
        },
        "rules": {
            "description": "List of EMS filter rules",
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "index": {
                    "description": "Index of rule",
                    "type": "int",
                    "required": true
                },
                "type": {
                    "description": "The type of rule",
                    "type": "str",
                    "choices": [
                        "include",
                        "exclude"
                    ],
                    "required": true
                },
                "message_criteria": {
                    "description": "Message criteria for EMS filter, required one of severities, name_pattern when creating ems filter.",
                    "type": "dict",
                    "suboptions": {
                        "severities": {
                            "description": "comma separated string of severities this rule applies to",
                            "type": "str"
                        },
                        "name_pattern": {
                            "description": "Name pattern to apply rule to",
                            "type": "str"
                        }
                    }
                }
            }
        }
    },
    "netapp.ontap.na_ontap_export_policy": {
        "state": {
            "description": [
                "Whether the specified export policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the export-policy to manage."
            ],
            "type": "str",
            "required": true
        },
        "from_name": {
            "description": [
                "The name of the export-policy to be renamed."
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "vserver": {
            "required": true,
            "type": "str",
            "description": [
                "Name of the vserver to use."
            ]
        }
    },
    "netapp.ontap.na_ontap_export_policy_rule": {
        "state": {
            "description": [
                "Whether the specified export policy rule should exist or not."
            ],
            "required": false,
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the export policy this rule will be added to (or modified, or removed from)."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "policy_name"
            ]
        },
        "client_match": {
            "description": [
                "List of Client Match host names, IP Addresses, Netgroups, or Domains."
            ],
            "type": "list",
            "elements": "str"
        },
        "anonymous_user_id": {
            "description": [
                "User name or ID to which anonymous users are mapped. Default value is '65534'."
            ],
            "type": "str"
        },
        "ro_rule": {
            "description": [
                "List of Read only access specifications for the rule"
            ],
            "choices": [
                "any",
                "none",
                "never",
                "krb5",
                "krb5i",
                "krb5p",
                "ntlm",
                "sys"
            ],
            "type": "list",
            "elements": "str"
        },
        "rw_rule": {
            "description": [
                "List of Read Write access specifications for the rule"
            ],
            "choices": [
                "any",
                "none",
                "never",
                "krb5",
                "krb5i",
                "krb5p",
                "ntlm",
                "sys"
            ],
            "type": "list",
            "elements": "str"
        },
        "super_user_security": {
            "description": [
                "List of Read Write access specifications for the rule"
            ],
            "choices": [
                "any",
                "none",
                "krb5",
                "krb5i",
                "krb5p",
                "ntlm",
                "sys"
            ],
            "type": "list",
            "elements": "str"
        },
        "allow_suid": {
            "description": [
                "If 'true', NFS server will honor SetUID bits in SETATTR operation. Default value on creation is 'true'"
            ],
            "type": "bool"
        },
        "protocol": {
            "description": [
                "List of Client access protocols.",
                "Default value is set to 'any' during create."
            ],
            "choices": [
                "any",
                "nfs",
                "nfs3",
                "nfs4",
                "cifs",
                "flexcache"
            ],
            "type": "list",
            "elements": "str",
            "aliases": [
                "protocols"
            ]
        },
        "rule_index": {
            "description": [
                "Index of the export policy rule.",
                "When rule_index is not set, we try to find a rule with an exact match. If found, no action is taken with state set to present, and the rule is deleted with state set to absent. An error is reported if more than one rule is found.",
                "When rule_index is set and state is present, if a rule cannot be found with this index, we try to find a rule with an exact match and assign the index to this rule if found. If no match is found, a new rule is created.",
                "All attributes that are set are used for an exact match.  As a minimum, client_match, ro_rule, and rw_rule are required."
            ],
            "type": "int"
        },
        "from_rule_index": {
            "description": [
                "index of the export policy rule to be re-indexed"
            ],
            "type": "int",
            "version_added": "21.20.0"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "ntfs_unix_security": {
            "description": [
                "NTFS export UNIX security options.",
                "With REST, supported from ONTAP 9.9.1 version."
            ],
            "type": "str",
            "choices": [
                "fail",
                "ignore"
            ],
            "version_added": "21.18.0"
        },
        "force_delete_on_first_match": {
            "description": [
                "when rule_index is not set, the default is to report an error on multiple matches.",
                "when this option is set, one of the rules with an exact match is deleted when state is absent.",
                "ignored when state is present."
            ],
            "type": "bool",
            "default": false,
            "version_added": "21.23.0"
        },
        "chown_mode": {
            "description": [
                "Specifies who is authorized to change the ownership mode of a file.",
                "With REST, supported from ONTAP 9.9.1 version."
            ],
            "type": "str",
            "choices": [
                "restricted",
                "unrestricted"
            ],
            "version_added": "22.0.0"
        },
        "allow_device_creation": {
            "description": [
                "Specifies whether or not device creation is allowed.",
                "default is true.",
                "With REST, supported from ONTAP 9.9.1 version."
            ],
            "type": "bool",
            "version_added": "22.0.0"
        }
    },
    "netapp.ontap.na_ontap_fcp": {
        "state": {
            "description": [
                "Whether the FCP should be enabled or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "status": {
            "description": [
                "Whether the FCP should be up or down"
            ],
            "choices": [
                "up",
                "down"
            ],
            "type": "str",
            "default": "up"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_fdsd": {
        "state": {
            "description": [
                "Whether the specified security descriptor should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the name of the security descriptor."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_fdsp": {
        "state": {
            "description": [
                "Whether the specified policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the name of the policy."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the security policy."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_fdspt": {
        "state": {
            "description": [
                "Whether the specified Policy Task should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the name of the policy the task will be associated with."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the File Directory security policy."
            ],
            "required": true,
            "type": "str"
        },
        "access_control": {
            "description": [
                "Specifies access control of the task."
            ],
            "choices": [
                "file_directory",
                "slag"
            ],
            "type": "str"
        },
        "ntfs_mode": {
            "description": [
                "Specifies NTFS propagation mode."
            ],
            "choices": [
                "propagate",
                "ignore",
                "replace"
            ],
            "type": "str"
        },
        "ntfs_sd": {
            "description": [
                "Specifies the NTFS security descriptor name."
            ],
            "type": "list",
            "elements": "str"
        },
        "path": {
            "description": [
                "Specifies the file or folder path of the task. In case of SLAG this path specify the volume or qtree mounted path."
            ],
            "required": true,
            "type": "str"
        },
        "security_type": {
            "description": [
                "Specifies the type of security. If not specified ONTAP will default to ntfs."
            ],
            "choices": [
                "ntfs",
                "nfsv4"
            ],
            "type": "str"
        },
        "index_num": {
            "description": [
                "Specifies the index number of a task. Tasks are applied in order. A task with a larger index value is applied after a task with a lower \\ index number. If you do not specify this optional parameter, new tasks are applied to the end of the index list."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_fdss": {
        "state": {
            "description": [
                "Whether the specified Policy Task should exist or not."
            ],
            "choices": [
                "present"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the security policy to apply."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the Vserver that contains the path to which the security policy is applied."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_file_directory_policy": {
        "state": {
            "description": [
                "Whether the specified policy or task should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the policy."
            ],
            "required": true,
            "type": "str"
        },
        "policy_name": {
            "description": [
                "Specifies the name of the policy."
            ],
            "type": "str",
            "required": true
        },
        "access_control": {
            "description": [
                "Specifies the access control of task to be applied."
            ],
            "choices": [
                "file_directory",
                "slag"
            ],
            "type": "str"
        },
        "ntfs_mode": {
            "description": [
                "Specifies NTFS Propagation Mode."
            ],
            "choices": [
                "propagate",
                "ignore",
                "replace"
            ],
            "type": "str"
        },
        "ntfs_sd": {
            "description": [
                "Specifies NTFS security descriptor identifier."
            ],
            "type": "list",
            "elements": "str"
        },
        "path": {
            "description": [
                "Specifies the file or folder path of the task.",
                "If path is specified and the policy which the task is adding to, does not exist, it will create the policy first then add the task to it.",
                "If path is specified, delete operation only removes task from policy."
            ],
            "type": "str"
        },
        "security_type": {
            "description": [
                "Specifies the type of security."
            ],
            "type": "str",
            "choices": [
                "ntfs",
                "nfsv4"
            ]
        },
        "ignore_broken_symlinks": {
            "description": [
                "Skip Broken Symlinks.",
                "Options used when applying the policy to vserver."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_file_security_permissions": {
        "state": {
            "description": [
                "Whether the specified file security permission should exist or not.",
                "When absent, all ACLs are deleted, irrespective of the contents of C(acls).",
                "See C(access_control) to only delete all SLAG ACLS, or only delete file-directory ACLs.",
                "Inherited ACLs are ignored, they can't be deleted or modified."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "path": {
            "description": [
                "The path of the file or directory on which to apply security permissions."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "owner": {
            "description": [
                "Specifies the owner of the NTFS security descriptor (SD).",
                "You can specify the owner using either a user name or security identifier (SID).",
                "The owner of the SD can modify the permissions on the file (or folder) or files (or folders) to which the SD is applied and can give other users the right to take ownership of the object or objects to which the SD is applied."
            ],
            "type": "str"
        },
        "control_flags": {
            "description": [
                "Specifies the control flags in the SD. It is a Hexadecimal Value."
            ],
            "type": "str"
        },
        "group": {
            "description": [
                "Specifies the owner's primary group.",
                "Specify the owner group using either a group name or SID."
            ],
            "type": "str"
        },
        "ignore_paths": {
            "description": [
                "For each file or directory in the list, specifies that permissions on this file or directory cannot be replaced."
            ],
            "type": "list",
            "elements": "str"
        },
        "propagation_mode": {
            "description": [
                "Specifies how to propagate security settings to child subfolders and files.",
                "Defaults to propagate."
            ],
            "choices": [
                "propagate",
                "replace"
            ],
            "type": "str"
        },
        "access_control": {
            "description": [
                "An Access Control Level specifies the access control of the task to be applied.",
                "Valid values are \"file-directory\" or \"Storage-Level Access Guard (SLAG)\".",
                "SLAG is used to apply the specified security descriptors with the task for the volume or qtree.",
                "Otherwise, the security descriptors are applied on files and directories at the specified path.",
                "The value slag is not supported on FlexGroups volumes. The default value is \"file-directory\".",
                "This field requires ONTAP 9.10.1 or later.  This defaults to \"file_directory\".",
                "When state is present, all ACLs not listed in C(acls) are deleted when this option is absent. If this option is present, only ACLs matching its value are deleted.",
                "When state is absent, all ACLs are deleted when this option is absent. If this option is present, only ACLs matching its value are deleted."
            ],
            "choices": [
                "file_directory",
                "slag"
            ],
            "type": "str"
        },
        "acls": {
            "description": [
                "A discretionary access security list (DACL) identifies the trustees that are allowed or denied access to a securable object.",
                "When a process tries to access a securable object, the system checks the access control entries (ACEs) in the object's DACL to determine whether to grant access to it."
            ],
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "access_control": {
                    "description": [
                        "An Access Control Level specifies the access control of the task to be applied.",
                        "Valid values are \"file-directory\" or \"Storage-Level Access Guard (SLAG)\".",
                        "SLAG is used to apply the specified security descriptors with the task for the volume or qtree.",
                        "Otherwise, the security descriptors are applied on files and directories at the specified path.",
                        "The value slag is not supported on FlexGroups volumes. The default value is \"file-directory\".",
                        "This field requires ONTAP 9.10.1 or later.  This defaults to \"file_directory\"."
                    ],
                    "choices": [
                        "file_directory",
                        "slag"
                    ],
                    "type": "str"
                },
                "access": {
                    "description": [
                        "Specifies whether the ACL is for DACL or SACL.",
                        "Currently tested with access_allow, access_deny for DACL and audit_failure, audit_success for SACL."
                    ],
                    "choices": [
                        "access_allow",
                        "access_deny",
                        "access_allowed_callback",
                        "access_denied_callback",
                        "access_allowed_callback_object",
                        "access_denied_callback_object",
                        "system_audit_callback",
                        "system_audit_callback_object",
                        "system_resource_attribute",
                        "system_scoped_policy_id",
                        "audit_failure",
                        "audit_success",
                        "audit_success_and_failure"
                    ],
                    "type": "str",
                    "required": true
                },
                "user": {
                    "description": [
                        "Specifies the account to which the ACE applies. Specify either name or SID.",
                        "As of 21.24.0, the module is not idempotent when using a SID.",
                        "To make it easier when also using C(na_ontap_file_security_permissions_acl), this is aliased to C(acl_user)."
                    ],
                    "type": "str",
                    "required": true,
                    "aliases": [
                        "acl_user"
                    ]
                },
                "rights": {
                    "description": [
                        "Specifies the access right controlled by the ACE for the account specified.",
                        "The \"rights\" parameter is mutually exclusive with the \"advanced_rights\" parameter.",
                        "ONTAP translates rights into advanced_rights and this module is not idempotent when rights are used.",
                        "Make sure to use C(advanced_rights) to maintain idempotency.  C(rights) can be used to discover the mapping to C(advanced_rights)."
                    ],
                    "choices": [
                        "no_access",
                        "full_control",
                        "modify",
                        "read_and_execute",
                        "read",
                        "write"
                    ],
                    "type": "str"
                },
                "apply_to": {
                    "description": [
                        "Specifies where to apply the DACL or SACL entries.",
                        "At least one suboption must be set to true.  Suboptions that are not set are assumed to be false.",
                        "With SLAGs, ONTAP accepts the three suboptions to be set to true, but creates 2 ACLs. This module requires the 2 ACLs to be present to preserve idempotency. See also C(validate_changes)."
                    ],
                    "type": "dict",
                    "required": false,
                    "suboptions": {
                        "files": {
                            "description": [
                                "Apply to Files."
                            ],
                            "type": "bool",
                            "default": false
                        },
                        "sub_folders": {
                            "description": [
                                "Apply to all sub-folders."
                            ],
                            "type": "bool",
                            "default": false
                        },
                        "this_folder": {
                            "description": [
                                "Apply only to this folder"
                            ],
                            "type": "bool",
                            "default": false
                        }
                    }
                },
                "advanced_rights": {
                    "description": [
                        "Specifies the advanced access right controlled by the ACE for the account specified."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "append_data": {
                            "description": [
                                "Append Data."
                            ],
                            "type": "bool"
                        },
                        "delete": {
                            "description": [
                                "Delete."
                            ],
                            "type": "bool"
                        },
                        "delete_child": {
                            "description": [
                                "Delete Child."
                            ],
                            "type": "bool"
                        },
                        "execute_file": {
                            "description": [
                                "Execute File."
                            ],
                            "type": "bool"
                        },
                        "full_control": {
                            "description": [
                                "Full Control."
                            ],
                            "type": "bool"
                        },
                        "read_attr": {
                            "description": [
                                "Read Attributes."
                            ],
                            "type": "bool"
                        },
                        "read_data": {
                            "description": [
                                "Read Data."
                            ],
                            "type": "bool"
                        },
                        "read_ea": {
                            "description": [
                                "Read Extended Attributes."
                            ],
                            "type": "bool"
                        },
                        "read_perm": {
                            "description": [
                                "Read Permissions."
                            ],
                            "type": "bool"
                        },
                        "write_attr": {
                            "description": [
                                "Write Attributes."
                            ],
                            "type": "bool"
                        },
                        "write_data": {
                            "description": [
                                "Write Data."
                            ],
                            "type": "bool"
                        },
                        "write_ea": {
                            "description": [
                                "Write Extended Attributes."
                            ],
                            "type": "bool"
                        },
                        "write_owner": {
                            "description": [
                                "Write Owner."
                            ],
                            "type": "bool"
                        },
                        "write_perm": {
                            "description": [
                                "Write Permission."
                            ],
                            "type": "bool"
                        }
                    }
                },
                "ignore_paths": {
                    "description": [
                        "For each file or directory in the list, specifies that permissions on this file or directory cannot be replaced."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "propagation_mode": {
                    "description": [
                        "Specifies how to propagate security settings to child subfolders and files.",
                        "Defaults to propagate.",
                        "This option valid only in create ACL."
                    ],
                    "choices": [
                        "propagate",
                        "replace"
                    ],
                    "type": "str"
                }
            }
        },
        "validate_changes": {
            "description": [
                "ACLs may not be applied as expected.",
                "For instance, if Everyone is inherited will all permissions, additional users will be granted all permissions, regardless of the request.",
                "For this specific example, you can either delete the top level Everyone, or create a new ACL for Everyone at a lower level.",
                "When using C(rights), ONTAP translates them into C(advanced_rights) so the validation will always fail.",
                "Valid values are C(ignore), no checking; C(warn) to issue a warning; C(error) to fail the module.",
                "With SLAGS, ONTAP may split one ACL into two ACLs depending on the C(apply_to) settings.  To maintain idempotency, please provide 2 ACLs as input."
            ],
            "choices": [
                "ignore",
                "warn",
                "error"
            ],
            "type": "str",
            "default": "error"
        }
    },
    "netapp.ontap.na_ontap_file_security_permissions_acl": {
        "state": {
            "description": [
                "Whether the specified file security permissions ACL should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "path": {
            "description": [
                "The path of the file or directory on which to apply security permissions."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "access_control": {
            "description": [
                "An Access Control Level specifies the access control of the task to be applied.",
                "Valid values are \"file-directory\" or \"Storage-Level Access Guard (SLAG)\".",
                "SLAG is used to apply the specified security descriptors with the task for the volume or qtree.",
                "Otherwise, the security descriptors are applied on files and directories at the specified path.",
                "The value slag is not supported on FlexGroups volumes. The default value is \"file-directory\".",
                "This field requires ONTAP 9.10.1 or later.  This defaults to \"file_directory\"."
            ],
            "choices": [
                "file_directory",
                "slag"
            ],
            "type": "str"
        },
        "access": {
            "description": [
                "An ACE is an element in an access control list (ACL). An ACL can have zero or more ACEs.",
                "Each ACE controls or monitors access to an object by a specified trustee."
            ],
            "choices": [
                "access_allow",
                "access_deny",
                "audit_failure",
                "audit_success"
            ],
            "type": "str",
            "required": true
        },
        "acl_user": {
            "description": [
                "Specifies the account to which the ACE applies. Specify either name or SID.",
                "As of 22.0.0, the module is not idempotent when using a SID.",
                "Note - we cannot use C(user) as if conflicts with the option for the admin user."
            ],
            "type": "str",
            "required": true
        },
        "rights": {
            "description": [
                "Specifies the access right controlled by the ACE for the account specified.",
                "The \"rights\" parameter is mutually exclusive with the \"advanced_rights\" parameter.",
                "ONTAP translates rights into advanced_rights and this module is not idempotent when rights are used.",
                "Make sure to use C(advanced_rights) to maintain idempotency.  C(rights) can be used to discover the mapping to C(advanced_rights)."
            ],
            "choices": [
                "no_access",
                "full_control",
                "modify",
                "read_and_execute",
                "read",
                "write"
            ],
            "type": "str"
        },
        "apply_to": {
            "description": [
                "Specifies where to apply the DACL or SACL entries.",
                "With SLAGs, ONTAP accepts the three suboptions to be set to true, but creates 2 ACLs. This module requires the 2 ACLs to be present to preserve idempotency. See also C(validate_changes)."
            ],
            "type": "dict",
            "required": true,
            "suboptions": {
                "files": {
                    "description": [
                        "Apply to Files."
                    ],
                    "type": "bool",
                    "default": false
                },
                "sub_folders": {
                    "description": [
                        "Apply to all sub-folders."
                    ],
                    "type": "bool",
                    "default": false
                },
                "this_folder": {
                    "description": [
                        "Apply only to this folder"
                    ],
                    "type": "bool",
                    "default": false
                }
            }
        },
        "advanced_rights": {
            "description": [
                "Specifies the advanced access right controlled by the ACE for the account specified."
            ],
            "type": "dict",
            "suboptions": {
                "append_data": {
                    "description": [
                        "Append Data."
                    ],
                    "type": "bool",
                    "required": false
                },
                "delete": {
                    "description": [
                        "Delete."
                    ],
                    "type": "bool",
                    "required": false
                },
                "delete_child": {
                    "description": [
                        "Delete Child."
                    ],
                    "type": "bool",
                    "required": false
                },
                "execute_file": {
                    "description": [
                        "Execute File."
                    ],
                    "type": "bool",
                    "required": false
                },
                "full_control": {
                    "description": [
                        "Full Control."
                    ],
                    "type": "bool",
                    "required": false
                },
                "read_attr": {
                    "description": [
                        "Read Attributes."
                    ],
                    "type": "bool",
                    "required": false
                },
                "read_data": {
                    "description": [
                        "Read Data."
                    ],
                    "type": "bool",
                    "required": false
                },
                "read_ea": {
                    "description": [
                        "Read Extended Attributes."
                    ],
                    "type": "bool",
                    "required": false
                },
                "read_perm": {
                    "description": [
                        "Read Permissions."
                    ],
                    "type": "bool",
                    "required": false
                },
                "write_attr": {
                    "description": [
                        "Write Attributes."
                    ],
                    "type": "bool",
                    "required": false
                },
                "write_data": {
                    "description": [
                        "Write Data."
                    ],
                    "type": "bool",
                    "required": false
                },
                "write_ea": {
                    "description": [
                        "Write Extended Attributes."
                    ],
                    "type": "bool",
                    "required": false
                },
                "write_owner": {
                    "description": [
                        "Write Owner."
                    ],
                    "type": "bool",
                    "required": false
                },
                "write_perm": {
                    "description": [
                        "Write Permission."
                    ],
                    "type": "bool",
                    "required": false
                }
            }
        },
        "ignore_paths": {
            "description": [
                "For each file or directory in the list, specifies that permissions on this file or directory cannot be replaced."
            ],
            "type": "list",
            "elements": "str"
        },
        "propagation_mode": {
            "description": [
                "Specifies how to propagate security settings to child subfolders and files.",
                "Defaults to propagate.",
                "This option is valid in create, but cannot modify."
            ],
            "choices": [
                "propagate",
                "replace"
            ],
            "type": "str"
        },
        "validate_changes": {
            "description": [
                "ACLs may not be applied as expected.",
                "For instance, if Everyone is inherited will all permissions, additional users will be granted all permissions, regardless of the request.",
                "For this specific example, you can either delete the top level Everyone, or create a new ACL for Everyone at a lower level.",
                "When using C(rights), ONTAP translates them into C(advanced_rights) so the validation will always fail.",
                "Valid values are C(ignore), no checking; C(warn) to issue a warning; C(error) to fail the module.",
                "With SLAGS, ONTAP may split one ACL into two ACLs depending on the C(apply_to) settings.  To maintain idempotency, please provide 2 ACLs as input."
            ],
            "choices": [
                "ignore",
                "warn",
                "error"
            ],
            "type": "str",
            "default": "error"
        }
    },
    "netapp.ontap.na_ontap_firewall_policy": {
        "state": {
            "description": [
                "Whether to set up a firewall policy or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "allow_list": {
            "description": [
                "A list of IPs and masks to use.",
                "The host bits of the IP addresses used in this list must be set to 0."
            ],
            "type": "list",
            "elements": "str"
        },
        "policy": {
            "description": [
                "A policy name for the firewall policy"
            ],
            "type": "str"
        },
        "service": {
            "description": [
                "The service to apply the policy to",
                "https and ssh are not supported starting with ONTAP 9.6",
                "portmap is supported for ONTAP 9.4, 9.5 and 9.6",
                "none is supported for ONTAP 9.8 onwards."
            ],
            "choices": [
                "dns",
                "http",
                "https",
                "ndmp",
                "ndmps",
                "ntp",
                "portmap",
                "rsh",
                "snmp",
                "ssh",
                "telnet",
                "none"
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The Vserver to apply the policy to."
            ],
            "type": "str"
        },
        "enable": {
            "description": [
                "enable firewall on a node"
            ],
            "choices": [
                "enable",
                "disable"
            ],
            "type": "str"
        },
        "logging": {
            "description": [
                "enable logging for firewall on a node"
            ],
            "choices": [
                "enable",
                "disable"
            ],
            "type": "str"
        },
        "node": {
            "description": [
                "The node to run the firewall configuration on"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_firmware_upgrade": {
        "state": {
            "description": [
                "Whether the specified ONTAP firmware should be upgraded or not."
            ],
            "default": "present",
            "type": "str"
        },
        "node": {
            "description": [
                "Node on which the device is located.",
                "Not required if package_url is present and force_disruptive_update is False.",
                "If this option is not given, the firmware will be downloaded on all nodes in the cluster,",
                "and the resources will be updated in background on all nodes, except for service processor.",
                "For service processor, the upgrade will happen automatically when each node is rebooted."
            ],
            "type": "str"
        },
        "clear_logs": {
            "description": [
                "Clear logs on the device after update. Default value is true.",
                "Not used if force_disruptive_update is False.",
                "Not supported with REST when set to false."
            ],
            "type": "bool",
            "default": true
        },
        "package": {
            "description": [
                "Name of the package file containing the firmware to be installed. Not required when -baseline is true.",
                "Not used if force_disruptive_update is False.",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "package_url": {
            "description": [
                "URL of the package file containing the firmware to be downloaded.",
                "Once the package file is downloaded to a node, the firmware update will happen automatically in background.",
                "For SP, the upgrade will happen automatically when a node is rebooted.",
                "For SP, the upgrade will happen automatically if autoupdate is enabled (which is the recommended setting)."
            ],
            "version_added": "20.5.0",
            "type": "str"
        },
        "force_disruptive_update": {
            "description": [
                "If set to C(False), and URL is given, the upgrade is non disruptive. If URL is not given, no operation is performed.",
                "Do not set this to C(True), unless directed by NetApp Tech Support.",
                "It will force an update even if the resource is not ready for it, and can be disruptive.",
                "Not supported with REST when set to true."
            ],
            "type": "bool",
            "version_added": "20.5.0",
            "default": false
        },
        "shelf_module_fw": {
            "description": [
                "Shelf module firmware to be updated to.",
                "Not used if force_disruptive_update is False (ONTAP will automatically select the firmware)",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "disk_fw": {
            "description": [
                "disk firmware to be updated to.",
                "Not used if force_disruptive_update is False (ONTAP will automatically select the firmware)",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "update_type": {
            "description": [
                "Type of firmware update to be performed. Options include serial_full, serial_differential, network_full.",
                "Not used if force_disruptive_update is False (ONTAP will automatically select the firmware)",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "install_baseline_image": {
            "description": [
                "Install the version packaged with ONTAP if this parameter is set to true. Otherwise, package must be used to specify the package to install.",
                "Not used if force_disruptive_update is False (ONTAP will automatically select the firmware)",
                "Not supported with REST when set to true."
            ],
            "type": "bool",
            "default": false
        },
        "firmware_type": {
            "description": [
                "Type of firmware to be upgraded. Options include shelf, ACP, service-processor, and disk.",
                "For shelf firmware upgrade the operation is asynchronous, and therefore returns no errors that might occur during the download process.",
                "Shelf firmware upgrade is idempotent if shelf_module_fw is provided .",
                "disk firmware upgrade is idempotent if disk_fw is provided .",
                "With check mode, SP, ACP, disk, and shelf firmware upgrade is not idempotent.",
                "This operation will only update firmware on shelves/disk that do not have the latest firmware-revision.",
                "For normal operations, choose one of storage or service-processor.",
                "Type storage includes acp, shelf and disk and ONTAP will automatically determine what to do.",
                "With REST, the module does not validate that the package matches the firmware type.  ONTAP determines the type automatically.",
                "With REST, C(storage) downloads any firmware, including service-processor firmware.",
                "With REST, C(service-processor) unlocks SP reboot options."
            ],
            "choices": [
                "storage",
                "service-processor",
                "shelf",
                "acp",
                "disk"
            ],
            "type": "str",
            "default": "storage"
        },
        "fail_on_502_error": {
            "description": [
                "The firmware download may take time if the web server is slow and if there are many nodes in the cluster.",
                "ONTAP will break the ZAPI connection after 5 minutes with a 502 Bad Gateway error, even though the download is still happening.",
                "By default, this module ignores this error and assumes the download is progressing as ONTAP does not provide a way to check the status.",
                "When setting this option to true, the module will report 502 as an error.",
                "Not supported with REST when set to true."
            ],
            "type": "bool",
            "default": false,
            "version_added": "20.6.0"
        },
        "rename_package": {
            "description": [
                "Rename the package.",
                "Only available if 'firmware_type' is 'service-processor'.",
                "Not supported with REST."
            ],
            "type": "str",
            "version_added": "20.7.0"
        },
        "replace_package": {
            "description": [
                "Replace the local package.",
                "Only available if 'firmware_type' is 'service-processor'.",
                "Not supported with REST when set to false."
            ],
            "type": "bool",
            "version_added": "20.7.0"
        },
        "reboot_sp": {
            "description": [
                "Reboot service processor before downloading package.",
                "Only available if 'firmware_type' is 'service-processor'.",
                "Defaults to True if not set when 'firmware_type' is 'service-processor'.",
                "Set this explictly to true to avoid a warning, and to false to not reboot the SP.",
                "Rebooting the SP before download is strongly recommended."
            ],
            "type": "bool",
            "version_added": "20.7.0"
        },
        "reboot_sp_after_download": {
            "description": [
                "Reboot service processor after downloading package.",
                "Only available if 'firmware_type' is 'service-processor'."
            ],
            "type": "bool",
            "version_added": "21.15.0"
        },
        "server_username": {
            "description": [
                "username to authenticate with the firmware package server.",
                "Ignored with ZAPI."
            ],
            "type": "str",
            "version_added": "21.15.0"
        },
        "server_password": {
            "description": [
                "password to authenticate with the firmware package server.",
                "Ignored with ZAPI."
            ],
            "type": "str",
            "version_added": "21.15.0"
        }
    },
    "netapp.ontap.na_ontap_flexcache": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified relationship should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "origin_volume": {
            "description": [
                "Name of the origin volume for the FlexCache.",
                "Required for creation."
            ],
            "type": "str"
        },
        "origin_vserver": {
            "description": [
                "Name of the origin vserver for the FlexCache.",
                "Required for creation."
            ],
            "type": "str"
        },
        "origin_cluster": {
            "description": [
                "Name of the origin cluster for the FlexCache.",
                "Defaults to cluster associated with target vserver if absent.",
                "Not used for creation."
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "Name of the target volume for the FlexCache."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "volume"
            ],
            "version_added": "21.3.0"
        },
        "junction_path": {
            "description": [
                "Junction path of the cache volume."
            ],
            "type": "str",
            "aliases": [
                "path"
            ]
        },
        "auto_provision_as": {
            "description": [
                "Use this parameter to automatically select existing aggregates for volume provisioning.  Eg flexgroup",
                "Note that the fastest aggregate type with at least one aggregate on each node of the cluster will be selected.",
                "Ignored when using REST - omit aggr_list for automatic selection."
            ],
            "type": "str"
        },
        "size": {
            "description": [
                "Size of cache volume."
            ],
            "type": "int"
        },
        "size_unit": {
            "description": [
                "The unit used to interpret the size parameter."
            ],
            "choices": [
                "bytes",
                "b",
                "kb",
                "mb",
                "gb",
                "tb",
                "pb",
                "eb",
                "zb",
                "yb"
            ],
            "type": "str",
            "default": "gb"
        },
        "vserver": {
            "description": [
                "Name of the target vserver for the FlexCache.",
                "Note that hostname, username, password are intended for the target vserver."
            ],
            "required": true,
            "type": "str"
        },
        "aggr_list": {
            "description": [
                "List of aggregates to host target FlexCache volume."
            ],
            "type": "list",
            "elements": "str",
            "aliases": [
                "aggregates"
            ]
        },
        "aggr_list_multiplier": {
            "description": [
                "Aggregate list repeat count.",
                "REST - Number of FlexCache constituents per aggregate when the C(aggregates) field is mentioned."
            ],
            "type": "int",
            "aliases": [
                "constituents_per_aggregate"
            ]
        },
        "force_unmount": {
            "description": [
                "Unmount FlexCache volume. Delete the junction path at which the volume is mounted before deleting the FlexCache relationship."
            ],
            "type": "bool",
            "default": false
        },
        "force_offline": {
            "description": [
                "Offline FlexCache volume before deleting the FlexCache relationship.",
                "The volume will be destroyed and data can be lost."
            ],
            "type": "bool",
            "default": false
        },
        "time_out": {
            "description": [
                "time to wait for flexcache creation or deletion in seconds",
                "if 0, the request is asynchronous",
                "default is set to 3 minutes"
            ],
            "type": "int",
            "default": 180
        },
        "writeback": {
            "version_added": "22.13.0",
            "description": [
                "FlexCache Writeback.",
                "Requires ONTAP 9.12 or later and only supported with REST."
            ],
            "type": "dict",
            "suboptions": {
                "enabled": {
                    "description": [
                        "Indicates whether or not writeback is enabled for the FlexCache volume.",
                        "Writeback is a storage method where data is first written to the FlexCache volume and then written to the origin of a FlexCache volume."
                    ],
                    "type": "bool",
                    "default": false
                }
            }
        },
        "prepopulate": {
            "version_added": "21.3.0",
            "description": [
                "prepopulate FlexCache with data from origin volume.",
                "requires ONTAP 9.8 or later, and REST support.",
                "dir_paths must be set for this option to be effective."
            ],
            "type": "dict",
            "suboptions": {
                "dir_paths": {
                    "description": [
                        "List of directory paths in the owning SVM's namespace at which the FlexCache volume is mounted.",
                        "Path must begin with '/'."
                    ],
                    "type": "list",
                    "elements": "str",
                    "required": true
                },
                "exclude_dir_paths": {
                    "description": [
                        "Directory path which needs to be excluded from prepopulation.",
                        "Path must begin with '/'.",
                        "Requires ONTAP 9.9 or later."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "recurse": {
                    "description": [
                        "Specifies whether or not the prepopulate action should search through the directory-path recursively.",
                        "If not set, the default value 'true' is used."
                    ],
                    "type": "bool"
                },
                "force_prepopulate_if_already_created": {
                    "description": [
                        "by default, this module will start a prepopulate task each time it is called, and is not idempotent.",
                        "if set to false, the prepopulate task is not started if the FlexCache already exists."
                    ],
                    "type": "bool",
                    "default": true
                }
            }
        },
        "relative_size": {
            "version_added": "22.14.0",
            "description": [
                "Only supported with REST and requires ONTAP 9.13.1 or later."
            ],
            "type": "dict",
            "suboptions": {
                "enabled": {
                    "description": [
                        "Specifies whether the relative sizing is enabled for the FlexCache volume."
                    ],
                    "type": "bool"
                },
                "percentage": {
                    "description": [
                        "Specifies the percent size the FlexCache volume should have relative to the total size of the origin volume."
                    ],
                    "type": "int"
                }
            }
        },
        "override_encryption": {
            "version_added": "22.14.0",
            "description": [
                "If set to true, a plaintext FlexCache volume for an encrypted origin volume is created.",
                "Only supported with REST and requires ONTAP 9.14.1 or later."
            ],
            "type": "bool"
        },
        "atime_scrub": {
            "version_added": "22.14.0",
            "description": [
                "Only supported with REST and requires ONTAP 9.14.1 or later."
            ],
            "type": "dict",
            "suboptions": {
                "enabled": {
                    "description": [
                        "Specifies whether scrubbing of inactive files based on atime is enabled for the FlexCache volume."
                    ],
                    "type": "bool"
                },
                "period": {
                    "description": [
                        "Specifies the atime duration in days after which a cached file is considered inactive."
                    ],
                    "type": "int"
                }
            }
        },
        "cifs_change_notify_enabled": {
            "version_added": "22.14.0",
            "description": [
                "Specifies whether a CIFS change notification is enabled for the FlexCache volume.",
                "Only supported with REST and requires ONTAP 9.15.1 or later."
            ],
            "type": "bool"
        },
        "global_file_locking_enabled": {
            "version_added": "22.14.0",
            "description": [
                "Specifies whether or not a FlexCache volume has global file locking mode enabled.",
                "When global file locking mode is enabled, the 'is_disconnected_mode_off_for_locks' flag is always set to 'true'.",
                "Only supported with REST and requires ONTAP 9.9 or later."
            ],
            "type": "bool"
        },
        "guarantee_type": {
            "version_added": "22.14.0",
            "description": [
                "Specifies The type of space guarantee of this volume in the aggregate.",
                "A value of 'volume' reserves space on the aggregates for the entire volume.",
                "A value of 'none' reserves no space on the aggregates, meaning that writes can fail if an aggregate runs out of space.",
                "Only supported with REST and requires ONTAP 9.7 or later."
            ],
            "choices": [
                "volume",
                "none"
            ],
            "type": "str"
        },
        "dr_cache": {
            "version_added": "22.14.0",
            "description": [
                "If set to true, a DR cache is created.",
                "Only supported with REST and requires ONTAP 9.9 or later."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_fpolicy_event": {
        "state": {
            "description": [
                "Whether the FPolicy policy event is present or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to create the event on."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Name of the Event."
            ],
            "required": true,
            "type": "str"
        },
        "file_operations": {
            "description": [
                "Name of file operations to be applied to the event. By default no operations are monitored."
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "close",
                "create",
                "create_dir",
                "delete",
                "delete_dir",
                "getattr",
                "link",
                "lookup",
                "open",
                "read",
                "write",
                "rename",
                "rename_dir",
                "setattr",
                "symlink"
            ]
        },
        "filters": {
            "description": [
                "Name of filters to be applied to the event. It is notification filtering parameters. By default no filters are selected."
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "monitor_ads",
                "close_with_modification",
                "close_without_modification",
                "first_read",
                "first_write",
                "offline_bit",
                "open_with_delete_intent",
                "open_with_write_intent",
                "write_with_size_change",
                "close_with_read",
                "setattr_with_owner_change",
                "setattr_with_group_change",
                "setattr_with_sacl_change",
                "setattr_with_dacl_change",
                "setattr_with_modify_time_change",
                "setattr_with_access_time_change",
                "setattr_with_creation_time_change",
                "setattr_with_mode_change",
                "setattr_with_size_change",
                "setattr_with_allocation_size_change",
                "exclude_directory"
            ]
        },
        "protocol": {
            "description": [
                "Name of protocol for which event is created. By default no protocol is selected."
            ],
            "choices": [
                "cifs",
                "nfsv3",
                "nfsv4"
            ],
            "type": "str"
        },
        "volume_monitoring": {
            "description": [
                "Indicator if the volume operation required for the event. If not specified the default Value is false."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_fpolicy_ext_engine": {
        "state": {
            "description": [
                "Whether the fPolicy external engine is present or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "the name of the vserver to create the external engine on"
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Name of the external engine."
            ],
            "required": true,
            "type": "str"
        },
        "certificate_ca": {
            "description": [
                "Certificate authority name. No default value is set for this field."
            ],
            "type": "str"
        },
        "certificate_common_name": {
            "description": [
                "FQDN or custom common name of certificate. No default value is set for this field."
            ],
            "type": "str"
        },
        "certificate_serial": {
            "description": [
                "Serial number of certificate. No default value is set for this field."
            ],
            "type": "str"
        },
        "extern_engine_type": {
            "description": [
                "External engine type. If the engine is asynchronous, no reply is sent from FPolicy servers. Default value set for this field is synchronous."
            ],
            "choices": [
                "synchronous",
                "asynchronous"
            ],
            "type": "str"
        },
        "is_resiliency_enabled": {
            "description": [
                "Indicates if the resiliency with this engine is required.",
                "If set to true, the notifications will be stored in a path as resiliency_directory_path",
                "If it is false, the notifications will not be stored. Default value is false."
            ],
            "type": "bool"
        },
        "max_connection_retries": {
            "description": [
                "Number of times storage appliance will attempt to establish a broken connection to FPolicy server. Default value set for this field is 5."
            ],
            "type": "int"
        },
        "max_server_reqs": {
            "description": [
                "Maximum number of outstanding screen requests that will be queued for an FPolicy Server. Default value set for this field is 50."
            ],
            "type": "int"
        },
        "port": {
            "description": [
                "Port number of the FPolicy server application."
            ],
            "type": "int"
        },
        "primary_servers": {
            "description": [
                "Primary FPolicy servers."
            ],
            "type": "list",
            "elements": "str"
        },
        "recv_buffer_size": {
            "description": [
                "Receive buffer size of connected socket for FPolicy Server. Default value set for this field is 256 kilobytes (256Kb)."
            ],
            "type": "int"
        },
        "resiliency_directory_path": {
            "description": [
                "Directory path under Vserver for storing file access notifications. File access notifications will be stored in a generated file during the outage time.",
                "The path is the full, user visible path relative to the Vserver root, and it might be crossing junction mount points."
            ],
            "type": "str"
        },
        "secondary_servers": {
            "description": [
                "Secondary FPolicy servers. No default value is set for this field."
            ],
            "type": "list",
            "elements": "str"
        },
        "send_buffer_size": {
            "description": [
                "Send buffer size of connected socket for FPolicy Server. Default value set for this field is 256 kilobytes (256Kb)."
            ],
            "type": "int"
        },
        "ssl_option": {
            "description": [
                "SSL option for external communication. No default value is set for this field"
            ],
            "choices": [
                "no_auth",
                "server_auth",
                "mutual_auth"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_fpolicy_policy": {
        "state": {
            "description": [
                "Whether the fPolicy policy should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "the name of the vserver to create the policy on"
            ],
            "type": "str",
            "required": true
        },
        "name": {
            "description": [
                "Name of the policy."
            ],
            "type": "str",
            "required": true
        },
        "allow_privileged_access": {
            "description": [
                "Specifies if privileged access should be given to FPolicy servers registered for the policy."
            ],
            "type": "bool"
        },
        "engine": {
            "description": [
                "Name of the Engine. External engines must be created prior to running this task."
            ],
            "type": "str"
        },
        "events": {
            "description": [
                "Events for file access monitoring."
            ],
            "type": "list",
            "elements": "str",
            "required": true
        },
        "is_mandatory": {
            "description": [
                "Specifies the action to take on a file access event in the case when all primary and secondary servers are down or no response is received from the",
                "FPolicy servers within a given timeout period. When True, file access events will be denied under these circumstances"
            ],
            "type": "bool"
        },
        "is_passthrough_read_enabled": {
            "description": [
                "Specifies if passthrough-read should be allowed to FPolicy servers registered for the policy."
            ],
            "type": "bool"
        },
        "privileged_user_name": {
            "description": [
                "User name for privileged access."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_fpolicy_scope": {
        "state": {
            "description": [
                "Whether the FPolicy policy scope is present or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "the name of the vserver to create the scope on"
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Name of the policy.  The FPolicy policy must exist for the scope to be created."
            ],
            "required": true,
            "type": "str"
        },
        "check_extensions_on_directories": {
            "description": [
                "Indicates whether directory names are also subjected to extensions check, similar to file names.",
                "By default, the value is true if policy is configured with Native engine, false otherwise."
            ],
            "type": "bool"
        },
        "export_policies_to_exclude": {
            "description": [
                "Export Policies to exclude for file access monitoring. By default no export policy is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "export_policies_to_include": {
            "description": [
                "Export policies to include for file access monitoring. By default no export policy is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "file_extensions_to_exclude": {
            "description": [
                "File extensions excluded for screening. By default no file extension is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "file_extensions_to_include": {
            "description": [
                "File extensions included for screening. By default no file extension is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "is_monitoring_of_objects_with_no_extension_enabled": {
            "description": [
                "Indicates whether monitoring of objects with no extension is required. By default, the value is false."
            ],
            "type": "bool"
        },
        "shares_to_exclude": {
            "description": [
                "Shares to exclude for file access monitoring. By default no share is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "shares_to_include": {
            "description": [
                "Shares to include for file access monitoring. By default no share is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "volumes_to_exclude": {
            "description": [
                "Volumes that are inactive for the file policy. The list can include items which are regular expressions, such as 'vol*' or 'user?'.",
                "Note that if a policy has both an exclude list and an include list, the include list is ignored by the filer when processing user requests.",
                "By default no volume is selected."
            ],
            "type": "list",
            "elements": "str"
        },
        "volumes_to_include": {
            "description": [
                "Volumes that are active for the file policy. The list can include items which are regular expressions, such as 'vol*' or 'user?'.",
                "By default no volume is selected."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_fpolicy_status": {
        "state": {
            "description": [
                "Whether the fPolicy policy is enabled or disabled."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to enable fPolicy on."
            ],
            "type": "str",
            "required": true
        },
        "policy_name": {
            "description": [
                "Name of the policy."
            ],
            "type": "str",
            "required": true
        },
        "sequence_number": {
            "description": [
                "Policy Sequence Number."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_igroup": {
        "state": {
            "description": [
                "Whether the specified Igroup should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the igroup to manage."
            ],
            "required": true,
            "type": "str"
        },
        "initiator_group_type": {
            "description": [
                "Type of the initiator group.",
                "Required when C(state=present)."
            ],
            "choices": [
                "fcp",
                "iscsi",
                "mixed"
            ],
            "type": "str",
            "aliases": [
                "protocol"
            ]
        },
        "from_name": {
            "description": [
                "Name of igroup to rename to name."
            ],
            "version_added": "2.7.0",
            "type": "str"
        },
        "os_type": {
            "description": [
                "OS type of the initiators within the group."
            ],
            "type": "str",
            "aliases": [
                "ostype"
            ]
        },
        "igroups": {
            "description": [
                "List of igroups to be mapped to the igroup.",
                "For a modify operation, this list replaces the existing igroups, or existing initiators.",
                "This module does not add or remove specific igroup(s) in an igroup.",
                "Mutually exclusive with initiator_names (initiators) and initiator_objects.",
                "Requires ONTAP 9.9 or newer."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "21.3.0"
        },
        "initiator_names": {
            "description": [
                "List of initiators to be mapped to the igroup.",
                "WWPN, WWPN Alias, or iSCSI name of Initiator to add or remove.",
                "For a modify operation, this list replaces the existing initiators, or existing igroups.",
                "This module does not add or remove specific initiator(s) in an igroup.",
                "Mutually exclusive with igroups and initiator_objects.",
                "This serves the same purpose as initiator_objects, but without the comment suboption."
            ],
            "aliases": [
                "initiator",
                "initiators"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "21.4.0"
        },
        "initiator_objects": {
            "description": [
                "List of initiators to be mapped to the igroup, with an optional comment field.",
                "WWPN, WWPN Alias, or iSCSI name of Initiator to add or remove.",
                "For a modify operation, this list replaces the existing initiators, or existing igroups.",
                "This module does not add or remove specific initiator(s) in an igroup.",
                "Mutually exclusive with initiator_names (initiators) and igroups.",
                "Requires ONTAP 9.9 with REST support."
            ],
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "name": {
                    "description": "name of the initiator.",
                    "type": "str",
                    "required": true
                },
                "comment": {
                    "description": "a more descriptive comment as the WWPN can be quite opaque.",
                    "type": "str"
                }
            },
            "version_added": "21.4.0"
        },
        "bind_portset": {
            "description": [
                "Name of a current portset to bind to the newly created igroup."
            ],
            "type": "str"
        },
        "force_remove_initiator": {
            "description": [
                "Forcibly remove the initiator even if there are existing LUNs mapped to this initiator group.",
                "This parameter should be used with caution."
            ],
            "type": "bool",
            "default": false,
            "aliases": [
                "allow_delete_while_mapped"
            ]
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_igroup_initiator": {
        "state": {
            "description": [
                "Whether the specified initiator should exist or not in an igroup."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "names": {
            "description": [
                "List of initiators to manage."
            ],
            "required": true,
            "aliases": [
                "name"
            ],
            "type": "list",
            "elements": "str"
        },
        "initiator_group": {
            "description": [
                "Name of the initiator group to which the initiator belongs."
            ],
            "required": true,
            "type": "str"
        },
        "force_remove": {
            "description": [
                "Forcibly remove the initiators even if there are existing LUNs mapped to the initiator group."
            ],
            "type": "bool",
            "default": false,
            "version_added": "20.1.0"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_info": {
        "state": {
            "type": "str",
            "description": [
                "deprecated as of 21.1.0.",
                "this option was ignored and continues to be ignored."
            ]
        },
        "vserver": {
            "type": "str",
            "description": [
                "If present, 'vserver tunneling' will limit the output to the vserver scope.",
                "Note that not all subsets are supported on a vserver, and 'all' will trigger an error."
            ],
            "version_added": "19.11.0"
        },
        "gather_subset": {
            "type": "list",
            "elements": "str",
            "description": [
                "When supplied, this argument will restrict the information collected to a given subset.  Possible values for this argument include",
                "active_directory_account_info",
                "aggregate_info",
                "aggr_efficiency_info",
                "autosupport_check_info",
                "cifs_options_info",
                "cifs_server_info",
                "cifs_share_info",
                "cifs_vserver_security_info",
                "cluster_identity_info",
                "cluster_image_info",
                "cluster_log_forwarding_info",
                "cluster_node_info",
                "cluster_peer_info",
                "cluster_switch_info",
                "clock_info",
                "disk_info",
                "env_sensors_info",
                "event_notification_destination_info",
                "event_notification_info",
                "export_policy_info",
                "export_rule_info",
                "fcp_adapter_info",
                "fcp_alias_info",
                "fcp_service_info",
                "igroup_info",
                "iscsi_service_info",
                "job_schedule_cron_info",
                "kerberos_realm_info",
                "ldap_client",
                "ldap_config",
                "license_info",
                "lun_info",
                "lun_map_info",
                "metrocluster_check_info",
                "metrocluster_info",
                "metrocluster_node_info",
                "net_dev_discovery_info",
                "net_dns_info",
                "net_failover_group_info",
                "net_firewall_info",
                "net_ifgrp_info",
                "net_interface_info",
                "net_interface_service_policy_info",
                "net_ipspaces_info",
                "net_port_info",
                "net_port_broadcast_domain_info",
                "net_routes_info",
                "net_vlan_info",
                "nfs_info",
                "ntfs_dacl_info",
                "ntfs_sd_info",
                "ntp_server_info",
                "nvme_info",
                "nvme_interface_info",
                "nvme_namespace_info",
                "nvme_subsystem_info",
                "ontap_system_version",
                "ontap_version",
                "ontapi_version",
                "qos_adaptive_policy_info",
                "qos_policy_info",
                "qtree_info",
                "quota_policy_info",
                "quota_report_info",
                "role_info",
                "security_key_manager_key_info",
                "security_login_account_info",
                "security_login_role_config_info",
                "security_login_role_info",
                "service_processor_info",
                "service_processor_network_info",
                "shelf_info",
                "sis_info",
                "sis_policy_info",
                "snapmirror_info",
                "snapmirror_destination_info",
                "snapmirror_policy_info",
                "snapshot_info",
                "snapshot_policy_info",
                "storage_failover_info",
                "storage_bridge_info",
                "subsys_health_info",
                "sysconfig_info",
                "sys_cluster_alerts",
                "volume_info",
                "volume_space_info",
                "vscan_info",
                "vscan_status_info",
                "vscan_scanner_pool_info",
                "vscan_connection_status_all_info",
                "vscan_connection_extended_stats_info",
                "vserver_info",
                "vserver_login_banner_info",
                "vserver_motd_info",
                "vserver_nfs_info",
                "vserver_peer_info",
                "Can specify a list of values to include a larger subset.",
                "Values can also be used with an initial C(!) to specify that a specific subset should not be collected.",
                "nvme is supported with ONTAP 9.4 onwards.",
                "use \"help\" to get a list of supported information for your system.",
                "with lun_info, serial_hex and naa_id are computed when serial_number is present."
            ],
            "default": "all"
        },
        "max_records": {
            "type": "int",
            "description": [
                "Maximum number of records returned in a single ZAPI call. Valid range is [1..2^32-1]. This parameter controls internal behavior of this module."
            ],
            "default": 1024,
            "version_added": "20.2.0"
        },
        "summary": {
            "description": [
                "Boolean flag to control return all attributes of the module info or only the names.",
                "If true, only names are returned."
            ],
            "default": false,
            "type": "bool",
            "version_added": "20.4.0"
        },
        "volume_move_target_aggr_info": {
            "description": [
                "Required options for volume_move_target_aggr_info"
            ],
            "type": "dict",
            "version_added": "20.5.0",
            "suboptions": {
                "volume_name": {
                    "description": [
                        "Volume name to get target aggr info for"
                    ],
                    "required": true,
                    "type": "str",
                    "version_added": "20.5.0"
                },
                "vserver": {
                    "description": [
                        "vserver the Volume lives on"
                    ],
                    "required": true,
                    "type": "str",
                    "version_added": "20.5.0"
                }
            }
        },
        "desired_attributes": {
            "description": [
                "Advanced feature requiring to understand ZAPI internals.",
                "Allows to request a specific attribute that is not returned by default, or to limit the returned attributes.",
                "A dictionary for the zapi desired-attributes element.",
                "An XML tag I(<tag>value</tag>) is a dictionary with tag as the key.",
                "Value can be another dictionary, a list of dictionaries, a string, or nothing.",
                "eg I(<tag/>) is represented as I(tag:)",
                "Only a single subset can be called at a time if this option is set.",
                "It is the caller responsibity to make sure key attributes are present in the right position.",
                "The module will error out if any key attribute is missing."
            ],
            "type": "dict",
            "version_added": "20.6.0"
        },
        "query": {
            "description": [
                "Advanced feature requiring to understand ZAPI internals.",
                "Allows to specify which objects to return.",
                "A dictionary for the zapi query element.",
                "An XML tag I(<tag>value</tag>) is a dictionary with tag as the key.",
                "Value can be another dictionary, a list of dictionaries, a string, or nothing.",
                "eg I(<tag/>) is represented as I(tag:)",
                "Only a single subset can be called at a time if this option is set."
            ],
            "type": "dict",
            "version_added": "20.7.0"
        },
        "use_native_zapi_tags": {
            "description": [
                "By default, I(-) in the returned dictionary keys are translated to I(_).",
                "If set to true, the translation is disabled."
            ],
            "type": "bool",
            "default": false,
            "version_added": "20.6.0"
        },
        "continue_on_error": {
            "description": [
                "By default, this module fails on the first error.",
                "This option allows to provide a list of errors that are not failing the module.",
                "Errors in the list are reported in the output, under the related info element, as an \"error\" entry.",
                "Possible values are always, never, missing_vserver_api_error, rpc_error, other_error.",
                "missing_vserver_api_error - most likely the API is available at cluster level but not vserver level.",
                "rpc_error - some queries are failing because the node cannot reach another node in the cluster.",
                "key_error - a query is failing because the returned data does not contain an expected key.",
                "for key errors, make sure to report this in Discord.  It may be a change in a new ONTAP version.",
                "other_error - anything not in the above list.",
                "always will continue on any error, never will fail on any error, they cannot be used with any other keyword."
            ],
            "type": "list",
            "elements": "str",
            "default": "never"
        }
    },
    "netapp.ontap.na_ontap_interface": {
        "state": {
            "description": [
                "Whether the specified interface should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "interface_name": {
            "description": [
                "Specifies the logical interface (LIF) name."
            ],
            "required": true,
            "type": "str"
        },
        "home_node": {
            "description": [
                "Specifies the LIF's home node.",
                "By default, the first node from the cluster is considered as home node."
            ],
            "type": "str"
        },
        "current_node": {
            "description": [
                "Specifies the LIF's current node.",
                "By default, this is home_node"
            ],
            "type": "str"
        },
        "home_port": {
            "description": [
                "Specifies the LIF's home port.",
                "Requires ONTAP 9.8 or later with FC interfaces when using REST.",
                "With REST, at least one of home_port, home_node, or broadcast_domain is required to create IP interfaces.",
                "With REST, either home_port or current_port is required to create FC interfaces.",
                "With ZAPI, home_port is required to create IP and FC interfaces.",
                "home_port and broadcast_domain are mutually exclusive (REST and IP interfaces)."
            ],
            "type": "str"
        },
        "current_port": {
            "description": [
                "Specifies the LIF's current port."
            ],
            "type": "str"
        },
        "role": {
            "description": [
                "Specifies the role of the LIF.",
                "When setting role as \"intercluster\" or \"cluster\", setting protocol is not supported.",
                "When creating a \"cluster\" role, the node name will appear as the prefix in the name of LIF.",
                "For example, if the specified name is clif and node name is node1, the LIF name appears in the ONTAP as node1_clif.",
                "Possible values are 'undef', 'cluster', 'data', 'node-mgmt', 'intercluster', 'cluster-mgmt'.",
                "Required when C(state=present) unless service_policy is present and ONTAP version is 9.8 or better.",
                "This option is deprecated in REST.",
                "With REST, the module tries to derive a service_policy and may error out."
            ],
            "type": "str"
        },
        "address": {
            "description": [
                "Specifies the LIF's IP address.",
                "ZAPI - Required when C(state=present) and is_ipv4_link_local if false and subnet_name is not set.",
                "REST - Required when C(state=present) and C(interface_type) is IP."
            ],
            "type": "str"
        },
        "netmask": {
            "description": [
                "Specifies the LIF's netmask.",
                "ZAPI - Required when C(state=present) and is_ipv4_link_local if false and subnet_name is not set.",
                "REST - Required when C(state=present) and C(interface_type) is IP."
            ],
            "type": "str"
        },
        "is_ipv4_link_local": {
            "description": [
                "Specifies the LIF's are to acquire a ipv4 link local address.",
                "Use case for this is when creating Cluster LIFs to allow for auto assignment of ipv4 link local address.",
                "Not supported in REST"
            ],
            "version_added": "20.1.0",
            "type": "bool"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "Required with ZAPI.",
                "Required with REST for FC interfaces (data vservers).",
                "Required with REST for SVM-scoped IP interfaces (data vservers).",
                "Invalid with REST for cluster-scoped IP interfaces.",
                "To help with transition from ZAPI to REST, vserver is ignored when the role is set to 'cluster', 'node-mgmt', 'intercluster', 'cluster-mgmt'.",
                "Remove this option to suppress the warning."
            ],
            "required": false,
            "type": "str"
        },
        "firewall_policy": {
            "description": [
                "Specifies the firewall policy for the LIF.",
                "This option is deprecated in REST.",
                "With REST, the module tries to derive a service_policy and may error out."
            ],
            "type": "str"
        },
        "failover_policy": {
            "description": [
                "Specifies the failover policy for the LIF.",
                "When using REST, this values are mapped to 'home_port_only', 'default', 'home_node_only', 'sfo_partners_only', 'broadcast_domain_only'."
            ],
            "choices": [
                "disabled",
                "system-defined",
                "local-only",
                "sfo-partner-only",
                "broadcast-domain-wide"
            ],
            "type": "str"
        },
        "failover_scope": {
            "description": [
                "Specifies the failover scope for the LIF.",
                "REST only, and only for IP interfaces.  Not supported for FC interfaces."
            ],
            "choices": [
                "home_port_only",
                "default",
                "home_node_only",
                "sfo_partners_only",
                "broadcast_domain_only"
            ],
            "type": "str",
            "version_added": "21.13.0"
        },
        "failover_group": {
            "description": [
                "Specifies the failover group for the LIF.",
                "Not supported with REST."
            ],
            "version_added": "20.1.0",
            "type": "str"
        },
        "subnet_name": {
            "description": [
                "Subnet where the IP interface address is allocated from.",
                "If the option is not used, the IP address and netmask need to be provided.",
                "With REST, ONTAP 9.11.1 or later is required.",
                "With REST, ipspace must be set."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "fail_if_subnet_conflicts": {
            "description": [
                "Creating or updating an IP Interface fails if the specified IP address falls within the address range of a named subnet.",
                "Set this value to false to use the specified IP address and to assign the subnet owning that address to the interface.",
                "This option is only supported with REST and requires ONTAP 9.11.1 or later."
            ],
            "version_added": "22.2.0",
            "type": "bool"
        },
        "admin_status": {
            "choices": [
                "up",
                "down"
            ],
            "description": [
                "Specifies the administrative status of the LIF."
            ],
            "type": "str"
        },
        "is_auto_revert": {
            "description": [
                "If true, data LIF will revert to its home node under certain circumstances such as startup,",
                "and load balancing migration capability is disabled automatically"
            ],
            "type": "bool"
        },
        "force_subnet_association": {
            "description": [
                "Set this to true to acquire the address from the named subnet and assign the subnet to the LIF.",
                "not supported with REST."
            ],
            "version_added": "2.9.0",
            "type": "bool"
        },
        "protocols": {
            "description": [
                "Specifies the list of data protocols configured on the LIF. By default, the values in this element are nfs, cifs and fcache.",
                "Other supported protocols are iscsi and fcp. A LIF can be configured to not support any data protocols by specifying 'none'.",
                "Protocol values of none, iscsi, fc-nvme or fcp can't be combined with any other data protocol(s).",
                "address, netmask and firewall_policy parameters are not supported for 'fc-nvme' option.",
                "This option is ignored with REST, though it can be used to derive C(interface_type) or C(data_protocol)."
            ],
            "type": "list",
            "elements": "str"
        },
        "data_protocol": {
            "description": [
                "The data protocol for which the FC interface is configured.",
                "Ignored with ZAPI or for IP interfaces.",
                "Required to create a FC type interface."
            ],
            "type": "str",
            "choices": [
                "fcp",
                "fc_nvme"
            ]
        },
        "dns_domain_name": {
            "description": [
                "Specifies the unique, fully qualified domain name of the DNS zone of this LIF.",
                "Supported from ONTAP 9.9.0 or later in REST.",
                "Not supported for FC interfaces."
            ],
            "version_added": "2.9.0",
            "type": "str"
        },
        "listen_for_dns_query": {
            "description": [
                "If True, this IP address will listen for DNS queries for the dnszone specified.",
                "Not supported with REST."
            ],
            "version_added": "2.9.0",
            "type": "bool"
        },
        "is_dns_update_enabled": {
            "description": [
                "Specifies if DNS update is enabled for this LIF. Dynamic updates will be sent for this LIF if updates are enabled at Vserver level.",
                "Supported from ONTAP 9.9.1 or later in REST.",
                "Not supported for FC interfaces."
            ],
            "version_added": "2.9.0",
            "type": "bool"
        },
        "service_policy": {
            "description": [
                "Starting with ONTAP 9.5, you can configure LIF service policies to identify a single service or a list of services that will use a LIF.",
                "In ONTAP 9.5, you can assign service policies only for LIFs in the admin SVM.",
                "In ONTAP 9.6, you can additionally assign service policies for LIFs in the data SVMs.",
                "When you specify a service policy for a LIF, you need not specify the data protocol and role for the LIF.",
                "NOTE that role is still required because of a ZAPI issue.  This limitation is removed in ONTAP 9.8.",
                "Creating LIFs by specifying the role and data protocols is also supported."
            ],
            "version_added": "20.4.0",
            "type": "str"
        },
        "from_name": {
            "description": "name of the interface to be renamed",
            "type": "str",
            "version_added": "21.11.0"
        },
        "interface_type": {
            "description": [
                "type of the interface.",
                "IP is assumed if address or netmask are present.",
                "IP interfaces includes cluster, intercluster, management, and NFS, CIFS, iSCSI interfaces.",
                "FC interfaces includes FCP and NVME-FC interfaces.",
                "ignored with ZAPI.",
                "required with REST, but maybe derived from deprecated options like C(role), C(protocols), and C(firewall_policy)."
            ],
            "type": "str",
            "choices": [
                "fc",
                "ip"
            ],
            "version_added": "21.13.0"
        },
        "ipspace": {
            "description": [
                "IPspace name is required with REST for cluster-scoped interfaces.  It is optional with SVM scope.",
                "ignored with ZAPI.",
                "ignored for FC interface."
            ],
            "type": "str",
            "version_added": "21.13.0"
        },
        "broadcast_domain": {
            "description": [
                "broadcast_domain name can be used to specify the location on an IP interface with REST, as an alternative to node or port.",
                "only used when creating an IP interface to select a node, ignored if the interface already exists.",
                "if the broadcast domain is not found, make sure to check the ipspace value.",
                "home_port and broadcast_domain are mutually exclusive.  home_node may or may not be present.",
                "not supported for FC interface.",
                "ignored with ZAPI."
            ],
            "type": "str",
            "version_added": "21.21.0"
        },
        "ignore_zapi_options": {
            "description": [
                "ignore unsupported options that should not be relevant.",
                "ignored with ZAPI."
            ],
            "choices": [
                "failover_group",
                "force_subnet_association",
                "listen_for_dns_query"
            ],
            "type": "list",
            "elements": "str",
            "default": [
                "force_subnet_association"
            ],
            "version_added": "21.13.0"
        },
        "probe_port": {
            "description": [
                "Probe port for Cloud load balancer - only valid in the Azure environment.",
                "Not supported with ZAPI or with FC interfaces.",
                "Requires ONTAP 9.10.1 or later."
            ],
            "type": "int",
            "version_added": "22.1.0"
        }
    },
    "netapp.ontap.na_ontap_ipspace": {
        "state": {
            "description": [
                "Whether the specified ipspace should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the ipspace to manage"
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the existing ipspace to be renamed to name"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_iscsi": {
        "state": {
            "description": [
                "Whether the service should be present or deleted."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "service_state": {
            "description": [
                "Whether the specified service should running."
            ],
            "choices": [
                "started",
                "stopped"
            ],
            "type": "str"
        },
        "vserver": {
            "required": true,
            "type": "str",
            "description": [
                "The name of the vserver to use."
            ]
        },
        "target_alias": {
            "type": "str",
            "description": [
                "The iSCSI target alias of the iSCSI service.",
                "The target alias can contain one (1) to 128 characters and feature any printable character except space (\" \").",
                "A PATCH request with an empty alias (\"\") clears the alias.",
                "This option is REST only."
            ],
            "version_added": "22.2.0"
        }
    },
    "netapp.ontap.na_ontap_iscsi_security": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified initiator should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "auth_type": {
            "description": [
                "Specifies the authentication type."
            ],
            "choices": [
                "chap",
                "none",
                "deny"
            ],
            "type": "str"
        },
        "initiator": {
            "description": [
                "Specifies the name of the initiator."
            ],
            "required": true,
            "type": "str"
        },
        "address_ranges": {
            "description": [
                "May be a single IPv4 or IPv6 address or a range containing a startaddress and an end address.",
                "The start and end addresses themselves are included in the range.",
                "If not present, the initiator is allowed to log in from any IP address."
            ],
            "type": "list",
            "elements": "str"
        },
        "inbound_username": {
            "description": [
                "Inbound CHAP username.",
                "Required for CHAP. A null username is not allowed."
            ],
            "type": "str"
        },
        "inbound_password": {
            "description": [
                "Inbound CHAP user password.",
                "Can not be modified. If want to change password, delete and re-create the initiator."
            ],
            "type": "str"
        },
        "outbound_username": {
            "description": [
                "Outbound CHAP user name."
            ],
            "type": "str"
        },
        "outbound_password": {
            "description": [
                "Outbound CHAP user password.",
                "Can not be modified. If want to change password, delete and re-create the initiator."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_job_schedule": {
        "state": {
            "description": [
                "Whether the specified job schedule should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the job-schedule to manage."
            ],
            "required": true,
            "type": "str"
        },
        "job_minutes": {
            "description": [
                "The minute(s) of each hour when the job should be run. Job Manager cron scheduling minute.",
                "1 represents all minutes. Range is [-1..59]",
                "Required for create."
            ],
            "type": "list",
            "elements": "int"
        },
        "job_hours": {
            "version_added": "2.8.0",
            "description": [
                "The hour(s) of the day when the job should be run. Job Manager cron scheduling hour.",
                "1 represents all hours. Range is [-1..23]"
            ],
            "type": "list",
            "elements": "int"
        },
        "job_months": {
            "version_added": "2.8.0",
            "description": [
                "The month(s) when the job should be run. Job Manager cron scheduling month.",
                "1 represents all months. Range is [-1..12], 0 and 12 may or may not be supported, see C(month_offset)"
            ],
            "type": "list",
            "elements": "int"
        },
        "job_days_of_month": {
            "version_added": "2.8.0",
            "description": [
                "The day(s) of the month when the job should be run. Job Manager cron scheduling day of month.",
                "1 represents all days of a month from 1 to 31. Range is [-1..31]"
            ],
            "type": "list",
            "elements": "int"
        },
        "job_days_of_week": {
            "version_added": "2.8.0",
            "description": [
                "The day(s) in the week when the job should be run. Job Manager cron scheduling day of week.",
                "Zero represents Sunday. -1 represents all days of a week. Range is [-1..6]"
            ],
            "type": "list",
            "elements": "int"
        },
        "month_offset": {
            "description": [
                "whether January starts at 0 or 1.  By default, ZAPI is using a 0..11 range, while REST is using 1..12.",
                "default to 0 when using ZAPI, and to 1 when using REST.",
                "when set to 0, a value of 12 or higher is rejected.",
                "when set to 1, a value of 0 or of 13 or higher is rejected."
            ],
            "type": "int",
            "choices": [
                0,
                1
            ],
            "version_added": "21.9.0"
        },
        "cluster": {
            "description": [
                "Defaults to local cluster.",
                "In a MetroCluster configuration, user-created schedules owned by the local cluster are replicated to the partner cluster. Likewise, user-created schedules owned by the partner cluster are replicated to the local cluster.",
                "Normally, only schedules owned by the local cluster can be created, modified, and deleted on the local cluster. However, when a MetroCluster configuration is in switchover, the cluster in switchover state can create, modify, and delete schedules owned by the partner cluster."
            ],
            "type": "str",
            "version_added": "21.22.0"
        }
    },
    "netapp.ontap.na_ontap_kerberos_interface": {
        "state": {
            "description": [
                "Modify kerberos interface, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "interface_name": {
            "description": [
                "Specifies the name of the logical interface associated with the NFS Kerberos configuration you want to modify."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Specifies the Vserver associated with the NFS Kerberos configuration you want to modify."
            ],
            "type": "str",
            "required": true
        },
        "enabled": {
            "description": [
                "Specifies whether to enable or disable Kerberos for NFS on the specified Vserver and logical interface.",
                "C(service_principal_name) is required when try to enable kerberos."
            ],
            "type": "bool",
            "required": true
        },
        "keytab_uri": {
            "description": [
                "Specifies loading a keytab file from the specified URI.",
                "This value must be in the form of \"(ftp|http|https)://(hostname|IPv4 Address|'['IPv6 Address']')...\"."
            ],
            "type": "str"
        },
        "machine_account": {
            "description": [
                "Specifies the machine account to create in Active Directory.",
                "Requires ONTAP 9.12.1 or later."
            ],
            "type": "str"
        },
        "organizational_unit": {
            "description": [
                "Specifies the organizational unit (OU) under which the Microsoft Active Directory server account will be created when you enable Kerberos using a realm for Microsoft KDC"
            ],
            "type": "str"
        },
        "admin_username": {
            "description": [
                "Specifies the administrator username."
            ],
            "type": "str"
        },
        "admin_password": {
            "description": [
                "Specifies the administrator password."
            ],
            "type": "str"
        },
        "service_principal_name": {
            "description": [
                "Specifies the service principal name (SPN) of the Kerberos configuration you want to modify.",
                "This value must be in the form nfs/host_name@REALM.",
                "host_name is the fully qualified host name of the Kerberos server, nfs is the service, and REALM is the name of the Kerberos realm.",
                "Specify Kerberos realm names in uppercase."
            ],
            "aliases": [
                "spn"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_kerberos_realm": {
        "state": {
            "description": [
                "Whether the Kerberos realm is present or absent."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "vserver/svm with kerberos realm configured"
            ],
            "required": true,
            "type": "str"
        },
        "realm": {
            "description": [
                "Kerberos realm name"
            ],
            "required": true,
            "type": "str"
        },
        "kdc_vendor": {
            "description": [
                "The vendor of the Key Distribution Centre (KDC) server",
                "Required if I(state=present)"
            ],
            "choices": [
                "other",
                "microsoft"
            ],
            "type": "str"
        },
        "kdc_ip": {
            "description": [
                "IP address of the Key Distribution Centre (KDC) server",
                "Required if I(state=present)"
            ],
            "type": "str"
        },
        "kdc_port": {
            "description": [
                "TCP port on the KDC to be used for Kerberos communication.",
                "The default for this parameter is 88."
            ],
            "type": "int"
        },
        "clock_skew": {
            "description": [
                "The clock skew in minutes is the tolerance for accepting tickets with time stamps that do not exactly match the host's system clock.",
                "The default for this parameter is '5' minutes.",
                "Supported from ONTAP 9.13.1 in REST."
            ],
            "type": "str"
        },
        "comment": {
            "description": [
                "Optional comment"
            ],
            "type": "str"
        },
        "admin_server_ip": {
            "description": [
                "IP address of the host where the Kerberos administration daemon is running. This is usually the master KDC.",
                "If this parameter is omitted, the address specified in kdc_ip is used.",
                "Supported from ONTAP 9.13.1 in REST."
            ],
            "type": "str"
        },
        "admin_server_port": {
            "description": [
                "The TCP port on the Kerberos administration server where the Kerberos administration service is running.",
                "The default for this parmater is '749'.",
                "Supported from ONTAP 9.13.1 in REST."
            ],
            "type": "str"
        },
        "pw_server_ip": {
            "description": [
                "IP address of the host where the Kerberos password-changing server is running.",
                "Typically, this is the same as the host indicated in the adminserver-ip.",
                "If this parameter is omitted, the IP address in kdc-ip is used.",
                "Supported from ONTAP 9.13.1 in REST."
            ],
            "type": "str"
        },
        "pw_server_port": {
            "description": [
                "The TCP port on the Kerberos password-changing server where the Kerberos password-changing service is running.",
                "The default for this parameter is '464'.",
                "Supported from ONTAP 9.13.1 in REST."
            ],
            "type": "str"
        },
        "ad_server_ip": {
            "description": [
                "IP Address of the Active Directory Domain Controller (DC). This is a mandatory parameter if the kdc-vendor is 'microsoft'."
            ],
            "type": "str",
            "version_added": "20.4.0"
        },
        "ad_server_name": {
            "description": [
                "Host name of the Active Directory Domain Controller (DC). This is a mandatory parameter if the kdc-vendor is 'microsoft'."
            ],
            "type": "str",
            "version_added": "20.4.0"
        }
    },
    "netapp.ontap.na_ontap_ldap": {
        "state": {
            "description": [
                "Whether the LDAP is present or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "vserver/svm configured to use LDAP"
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "The name of LDAP client configuration"
            ],
            "required": true,
            "type": "str"
        },
        "skip_config_validation": {
            "description": [
                "Skip LDAP validation"
            ],
            "choices": [
                "true",
                "false"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_ldap_client": {
        "state": {
            "description": [
                "Whether the specified LDAP client configuration exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "vserver/svm that holds LDAP client configuration."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "The name of LDAP client configuration.",
                "Supported only in ZAPI.",
                "Required with ZAPI."
            ],
            "type": "str"
        },
        "servers": {
            "description": [
                "Comma separated list of LDAP servers. FQDN's or IP addreses.",
                "servers or ad_domain is required if I(state=present).",
                "Mutually exclusive with preferred_ad_servers and ad_domain."
            ],
            "type": "list",
            "elements": "str",
            "aliases": [
                "ldap_servers"
            ]
        },
        "schema": {
            "description": [
                "LDAP schema.",
                "Required if I(state=present).",
                "default schemas - 'AD-IDMU', 'AD-SFU', 'MS-AD-BIS', 'RFC-2307'.",
                "custom schemas are allowed as well."
            ],
            "type": "str"
        },
        "ad_domain": {
            "description": [
                "Active Directory Domain Name.",
                "servers or ad_domain is required if I(state=present).",
                "Mutually exclusive with servers."
            ],
            "type": "str"
        },
        "base_dn": {
            "description": [
                "LDAP base DN."
            ],
            "type": "str"
        },
        "base_scope": {
            "description": [
                "LDAP search scope."
            ],
            "choices": [
                "subtree",
                "onelevel",
                "base"
            ],
            "type": "str"
        },
        "bind_as_cifs_server": {
            "description": [
                "The cluster uses the CIFS server's credentials to bind to the LDAP server."
            ],
            "type": "bool"
        },
        "preferred_ad_servers": {
            "description": [
                "Preferred Active Directory (AD) Domain Controllers.",
                "Mutually exclusive with servers."
            ],
            "type": "list",
            "elements": "str"
        },
        "port": {
            "description": [
                "LDAP server TCP port."
            ],
            "type": "int",
            "aliases": [
                "tcp_port"
            ],
            "version_added": "21.3.0"
        },
        "query_timeout": {
            "description": [
                "LDAP server query timeout."
            ],
            "type": "int"
        },
        "min_bind_level": {
            "description": [
                "Minimal LDAP server bind level."
            ],
            "choices": [
                "anonymous",
                "simple",
                "sasl"
            ],
            "type": "str"
        },
        "bind_dn": {
            "description": [
                "LDAP bind user DN."
            ],
            "type": "str"
        },
        "bind_password": {
            "description": [
                "LDAP bind user password."
            ],
            "type": "str"
        },
        "use_start_tls": {
            "description": [
                "Start TLS on LDAP connection."
            ],
            "type": "bool"
        },
        "referral_enabled": {
            "description": [
                "LDAP Referral Chasing."
            ],
            "type": "bool"
        },
        "session_security": {
            "description": [
                "Client Session Security."
            ],
            "choices": [
                "none",
                "sign",
                "seal"
            ],
            "type": "str"
        },
        "ldaps_enabled": {
            "description": [
                "Specifies whether or not LDAPS is enabled."
            ],
            "type": "bool",
            "version_added": "21.22.0"
        },
        "skip_config_validation": {
            "description": [
                "Indicates whether or not the validation for the specified LDAP configuration is disabled.",
                "By default, errors are reported with REST when server names cannot be resolved for instance.",
                "Requires ONTAP 9.9 or later.",
                "This is ignored with ZAPI."
            ],
            "type": "bool",
            "version_added": "22.0.0"
        }
    },
    "netapp.ontap.na_ontap_license": {
        "state": {
            "description": [
                "Whether the specified license packages should be installed or removed."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "remove_unused": {
            "description": [
                "Remove license packages that have no controller affiliation in the cluster.",
                "Not supported with REST."
            ],
            "type": "bool"
        },
        "remove_expired": {
            "description": [
                "Remove license packages that have expired in the cluster.",
                "Not supported with REST."
            ],
            "type": "bool"
        },
        "serial_number": {
            "description": [
                "Serial number of the node or cluster associated with the license package.",
                "This parameter is required when removing a license package.",
                "With REST, '*' is accepted and matches any serial number."
            ],
            "type": "str"
        },
        "license_names": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of license package names to remove."
            ],
            "suboptions": {
                "base": {
                    "description": [
                        "Cluster Base License"
                    ]
                },
                "nfs": {
                    "description": [
                        "NFS License"
                    ]
                },
                "cifs": {
                    "description": [
                        "CIFS License"
                    ]
                },
                "iscsi": {
                    "description": [
                        "iSCSI License"
                    ]
                },
                "fcp": {
                    "description": [
                        "FCP License"
                    ]
                },
                "cdmi": {
                    "description": [
                        "CDMI License"
                    ]
                },
                "snaprestore": {
                    "description": [
                        "SnapRestore License"
                    ]
                },
                "snapmirror": {
                    "description": [
                        "SnapMirror License"
                    ]
                },
                "flexclone": {
                    "description": [
                        "FlexClone License"
                    ]
                },
                "snapvault": {
                    "description": [
                        "SnapVault License"
                    ]
                },
                "snaplock": {
                    "description": [
                        "SnapLock License"
                    ]
                },
                "snapmanagersuite": {
                    "description": [
                        "SnapManagerSuite License"
                    ]
                },
                "snapprotectapps": {
                    "description": [
                        "SnapProtectApp License"
                    ]
                },
                "v_storageattach": {
                    "description": [
                        "Virtual Attached Storage License"
                    ]
                }
            }
        },
        "license_codes": {
            "description": [
                "List of license codes to be installed."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_local_hosts": {
        "state": {
            "description": [
                "Whether the specified local hosts should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "owner": {
            "description": [
                "Name of the data SVM or cluster."
            ],
            "required": true,
            "type": "str"
        },
        "aliases": {
            "description": [
                "The list of aliases."
            ],
            "type": "list",
            "elements": "str"
        },
        "host": {
            "description": [
                "Canonical hostname.",
                "minimum length is 1 and maximum length is 255."
            ],
            "type": "str"
        },
        "address": {
            "description": [
                "IPv4/IPv6 address in dotted form."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_login_messages": {
        "banner": {
            "description": [
                "Login banner Text message."
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the SVM login messages should be set for.",
                "With ZAPI, this option is required.  This a cluster or data SVM.",
                "With REST, this is a data SVM.",
                "With REST, cluster scope is assumed when this option is absent."
            ],
            "type": "str"
        },
        "motd_message": {
            "description": [
                "MOTD Text message.",
                "message is deprecated and will be removed to avoid a conflict with an Ansible internal variable."
            ],
            "type": "str",
            "aliases": [
                "message"
            ]
        },
        "show_cluster_motd": {
            "description": [
                "Set to I(false) if Cluster-level Message of the Day should not be shown"
            ],
            "type": "bool",
            "default": true
        }
    },
    "netapp.ontap.na_ontap_log_forward": {
        "state": {
            "description": [
                "Whether the log forward configuration should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "destination": {
            "description": [
                "Destination address that the log messages will be forwarded to. Can be a hostname or IP address."
            ],
            "required": true,
            "type": "str"
        },
        "port": {
            "description": [
                "The destination port used to forward the message."
            ],
            "required": true,
            "type": "int"
        },
        "facility": {
            "description": [
                "Facility code used to indicate the type of software that generated the message."
            ],
            "type": "str",
            "choices": [
                "kern",
                "user",
                "local0",
                "local1",
                "local2",
                "local3",
                "local4",
                "local5",
                "local6",
                "local7"
            ]
        },
        "force": {
            "description": [
                "Skip the Connectivity Test"
            ],
            "type": "bool"
        },
        "protocol": {
            "description": [
                "Log Forwarding Protocol"
            ],
            "choices": [
                "udp_unencrypted",
                "tcp_unencrypted",
                "tcp_encrypted"
            ],
            "type": "str"
        },
        "verify_server": {
            "description": [
                "Verify Destination Server Identity"
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_lun": {
        "state": {
            "description": [
                "Whether the specified LUN should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the LUN to manage.",
                "Or LUN group name (volume name) when san_application_template is used."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "The name of the LUN to be renamed."
            ],
            "type": "str",
            "version_added": "20.12.0"
        },
        "flexvol_name": {
            "description": [
                "The name of the FlexVol the LUN should exist on.",
                "Required if san_application_template is not present.",
                "Not allowed if san_application_template is present.",
                "Not supported for ASA r2 system."
            ],
            "type": "str"
        },
        "qtree_name": {
            "description": [
                "Specifies the name of the Qtree that contains the new LUN.",
                "Not allowed if san_application_template is present.",
                "Only supported with REST.",
                "Qtrees are not supported with ASA r2 system."
            ],
            "version_added": "22.8.0",
            "type": "str"
        },
        "size": {
            "description": [
                "The size of the LUN in C(size_unit).",
                "Required when creating a single LUN if application template is not used."
            ],
            "type": "int"
        },
        "size_unit": {
            "description": [
                "The unit used to interpret the size parameter."
            ],
            "choices": [
                "bytes",
                "b",
                "kb",
                "mb",
                "gb",
                "tb",
                "pb",
                "eb",
                "zb",
                "yb"
            ],
            "default": "gb",
            "type": "str"
        },
        "comment": {
            "description": [
                "Optional descriptive comment for the LUN."
            ],
            "type": "str",
            "version_added": "21.2.0"
        },
        "force_resize": {
            "description": [
                "Forcibly reduce the size. This is required for reducing the size of the LUN to avoid accidentally reducing the LUN size."
            ],
            "type": "bool"
        },
        "force_remove": {
            "description": [
                "If \"true\", override checks that prevent a LUN from being destroyed if it is online and mapped.",
                "If \"false\", destroying an online and mapped LUN will fail."
            ],
            "type": "bool",
            "default": false
        },
        "force_remove_fenced": {
            "description": [
                "If \"true\", override checks that prevent a LUN from being destroyed while it is fenced.",
                "If \"false\", attempting to destroy a fenced LUN will fail.",
                "The default if not specified is \"false\". This field is available in Data ONTAP 8.2 and later."
            ],
            "type": "bool"
        },
        "vserver": {
            "required": true,
            "description": [
                "The name of the vserver to use."
            ],
            "type": "str"
        },
        "os_type": {
            "description": [
                "The os type for the LUN."
            ],
            "type": "str",
            "aliases": [
                "ostype"
            ]
        },
        "qos_policy_group": {
            "description": [
                "The QoS policy group to be set on the LUN.",
                "With REST, qos_policy_group and qos_adaptive_policy_group are handled as QOS policy."
            ],
            "type": "str",
            "version_added": "20.12.0"
        },
        "qos_adaptive_policy_group": {
            "description": [
                "The adaptive QoS policy group to be set on the LUN.",
                "Defines measurable service level objectives (SLOs) and service level agreements (SLAs) that adjust based on the LUN's allocated space or used space.",
                "Requires ONTAP 9.4 or later.",
                "With REST, qos_policy_group and qos_adaptive_policy_group are handled as QOS policy."
            ],
            "type": "str",
            "version_added": "21.2.0"
        },
        "space_reserve": {
            "description": [
                "This can be set to \"false\" which will create a LUN without any space being reserved.",
                "Not supported for ASA r2 system. All LUNs are provisioned without a space reservation."
            ],
            "type": "bool",
            "default": true
        },
        "space_allocation": {
            "description": [
                "This enables support for the SCSI Thin Provisioning features.  If the Host and file system do not support this do not enable it.",
                "Not supported for ASA r2 system. All LUNs are provisioned with SCSI thin provisioning enabled."
            ],
            "type": "bool",
            "version_added": "2.7.0"
        },
        "use_exact_size": {
            "description": [
                "This can be set to \"false\" which will round the LUN >= 450g."
            ],
            "type": "bool",
            "default": true,
            "version_added": "20.11.0"
        },
        "san_application_template": {
            "description": [
                "additional options when using the application/applications REST API to create LUNs.",
                "the module is using ZAPI by default, and switches to REST if san_application_template is present.",
                "create one or more LUNs (and the associated volume as needed).",
                "operations at the LUN level are supported, they require to know the LUN short name.",
                "this requires ONTAP 9.8 or higher.",
                "The module partially supports ONTAP 9.7 for create and delete operations, but not for modify (API limitations).",
                "Not supported with ASA r2 system."
            ],
            "type": "dict",
            "version_added": "20.12.0",
            "suboptions": {
                "name": {
                    "description": "name of the SAN application.",
                    "type": "str",
                    "required": true
                },
                "igroup_name": {
                    "description": "name of the initiator group through which the contents of this application will be accessed.",
                    "type": "str"
                },
                "lun_count": {
                    "description": "number of LUNs in the application component (1 to 32).",
                    "type": "int"
                },
                "protection_type": {
                    "description": [
                        "The snasphot policy for the volume supporting the LUNs."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "local_policy": {
                            "description": [
                                "The snapshot copy policy for the volume."
                            ],
                            "type": "str"
                        }
                    }
                },
                "storage_service": {
                    "description": [
                        "The performance service level (PSL) for this volume"
                    ],
                    "type": "str",
                    "choices": [
                        "value",
                        "performance",
                        "extreme"
                    ]
                },
                "tiering": {
                    "description": [
                        "Cloud tiering policy."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "control": {
                            "description": "Storage tiering placement rules for the container.",
                            "choices": [
                                "required",
                                "best_effort",
                                "disallowed"
                            ],
                            "type": "str"
                        },
                        "policy": {
                            "description": [
                                "Cloud tiering policy."
                            ],
                            "choices": [
                                "all",
                                "auto",
                                "none",
                                "snapshot-only"
                            ],
                            "type": "str"
                        },
                        "object_stores": {
                            "description": "list of object store names for tiering.",
                            "type": "list",
                            "elements": "str"
                        }
                    }
                },
                "total_size": {
                    "description": [
                        "The total size of the application component, split across the member LUNs in C(total_size_unit).",
                        "Recommended when C(lun_count) is present.",
                        "Required when C(lun_count) is present and greater than 1.",
                        "Note - if lun_count is equal to 1, and total_size is not present, size is used to maintain backward compatibility."
                    ],
                    "type": "int",
                    "version_added": "21.1.0"
                },
                "total_size_unit": {
                    "description": [
                        "The unit used to interpret the total_size parameter.",
                        "Defaults to size_unit if not present."
                    ],
                    "choices": [
                        "bytes",
                        "b",
                        "kb",
                        "mb",
                        "gb",
                        "tb",
                        "pb",
                        "eb",
                        "zb",
                        "yb"
                    ],
                    "type": "str",
                    "version_added": "21.1.0"
                },
                "use_san_application": {
                    "description": [
                        "Whether to use the application/applications REST/API to create LUNs.",
                        "This will default to true if any other suboption is present."
                    ],
                    "type": "bool",
                    "default": true
                },
                "scope": {
                    "description": [
                        "whether the top level name identifies a single LUN or a LUN group (application).",
                        "By default, the module will try to make the right choice, but can report extra warnings.",
                        "Setting scope to 'application' is required to convert an existing volume to a smart container.",
                        "The module reports an error when 'lun' or 'application' is used and the desired action cannot be completed.",
                        "The module issues warnings when the default 'auto' is used, and there is ambiguity regarding the desired actions."
                    ],
                    "type": "str",
                    "choices": [
                        "application",
                        "auto",
                        "lun"
                    ],
                    "default": "auto",
                    "version_added": "21.2.0"
                },
                "exclude_aggregates": {
                    "description": [
                        "The list of aggregate names to exclude when creating a volume.",
                        "Requires ONTAP 9.9.1 GA or better."
                    ],
                    "type": "list",
                    "elements": "str",
                    "version_added": "21.7.0"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_lun_copy": {
        "state": {
            "description": [
                "Whether the specified LUN should exist or not."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "destination_vserver": {
            "description": [
                "the name of the Vserver that will host the new LUN."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "vserver"
            ]
        },
        "destination_path": {
            "description": [
                "Specifies the full path to the new LUN."
            ],
            "required": true,
            "type": "str"
        },
        "source_path": {
            "description": [
                "Specifies the full path to the source LUN."
            ],
            "required": true,
            "type": "str"
        },
        "source_vserver": {
            "description": [
                "Specifies the name of the vserver hosting the LUN to be copied.",
                "If not provided, C(destination_vserver) value is set as default.",
                "with REST, this option value must match C(destination_vserver) when present."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_lun_map": {
        "state": {
            "description": [
                "Whether the specified LUN should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "initiator_group_name": {
            "description": [
                "Initiator group to map to the given LUN."
            ],
            "required": true,
            "type": "str"
        },
        "path": {
            "description": [
                "Path of the LUN.",
                "For ASA R2 systems, The path should match the format <name>[@<snapshot-name>]."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "required": true,
            "description": [
                "The name of the vserver to use."
            ],
            "type": "str"
        },
        "lun_id": {
            "description": [
                "LUN ID assigned for the map."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_lun_map_reporting_nodes": {
        "state": {
            "description": [
                "Whether to add or remove reporting nodes"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "initiator_group_name": {
            "description": [
                "Initiator group to map to the given LUN."
            ],
            "required": true,
            "type": "str"
        },
        "path": {
            "description": [
                "Path of the LUN.",
                "For ASA R2 systems, The path should match the format <name>[@<snapshot-name>]."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "required": true,
            "description": [
                "The name of the vserver owning the LUN."
            ],
            "type": "str"
        },
        "nodes": {
            "required": true,
            "description": [
                "List of reporting nodes to add or remove"
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_mav_approval_group": {
        "state": {
            "description": [
                "Specifies whether to create/modify or delete the specified approval group."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specifies the name of an approval group."
            ],
            "required": true,
            "type": "str"
        },
        "email": {
            "description": [
                "Specifies the list of email addresses that are notified when a request is created, approved, vetoed, or executed."
            ],
            "type": "list",
            "elements": "str"
        },
        "approvers": {
            "description": [
                "Specifies the list of ONTAP users that are part of the approval group."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_mav_config": {
        "state": {
            "description": [
                "Modify MAV global setting, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "enabled": {
            "description": [
                "Specifies whether multi-admin approval is currently configured or not.",
                "By default, the feature is disabled and the value is set to false."
            ],
            "type": "bool",
            "default": false
        },
        "required_approvers": {
            "description": [
                "Specifies the required number of approvers to approve the request which is inherited by the rule if required-approvers is not provided for the rule.",
                "The default and minimum number of required approvers is 1."
            ],
            "type": "int"
        },
        "approval_groups": {
            "description": [
                "Specifies the list of global approval groups which are inherited by the rule if the approval-groups is not provided for the rule.",
                "The default value is an empty list."
            ],
            "type": "list",
            "elements": "str"
        },
        "approval_expiry": {
            "description": [
                "Specifies the time, in ISO-8601 duration format, that the approvers have after a new execution request is submitted to approve or disapprove the request before the request expires.",
                "The default value is one hour (PT1H), the minimum supported value is one second (PT1S), and the maximum supported value is 14 days (P14D)."
            ],
            "type": "str"
        },
        "execution_expiry": {
            "description": [
                "Specifies the time, in ISO-8601 duration format, that the authorized users have after a request is approved to execute the requested operation before the request expires.",
                "The default value is one hour (PT1H), the minimum supported value is one second (PT1S), and the maximum supported value is 14 days (P14D)."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_mav_rule": {
        "state": {
            "description": [
                "Specifies whether to create/modify or delete the specified rule."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "operation": {
            "description": [
                "Specifies the command that requires one or more approvals."
            ],
            "required": true,
            "type": "str"
        },
        "query": {
            "description": [
                "Specifies the query information which is applied to the subset of objects of ONTAP operation of the rule."
            ],
            "type": "str"
        },
        "required_approvers": {
            "description": [
                "Specifies the number of required approvers, excluding the user that made the request.",
                "The default and minimum number of required approvers is 1."
            ],
            "type": "int"
        },
        "approval_groups": {
            "description": [
                "Specifies the list of approval groups that are allowed to approve requests for rules that don't have approval groups."
            ],
            "type": "list",
            "elements": "str"
        },
        "approval_expiry": {
            "description": [
                "Specifies the time, in ISO-8601 duration format, that the approvers have after a new execution request is submitted to approve or disapprove the request before the request expires.",
                "The default value is one hour (PT1H), the minimum supported value is one second (PT1S), and the maximum supported value is 14 days (P14D)."
            ],
            "type": "str"
        },
        "execution_expiry": {
            "description": [
                "Specifies the time, in ISO-8601 duration format, that the authorized users have after a request is approved to execute the requested operation before the request expires.",
                "The default value is one hour (PT1H), the minimum supported value is one second (PT1S), and the maximum supported value is 14 days (P14D)."
            ],
            "type": "str"
        },
        "auto_request_create": {
            "description": [
                "When true, ONTAP automatically creates a request for any failed operation where there is no matching pending request.",
                "Defaults to True."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_mcc_mediator": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether MCCIP Mediator is present or not."
            ],
            "default": "present",
            "type": "str"
        },
        "mediator_address": {
            "description": [
                "ip address of the mediator"
            ],
            "type": "str",
            "required": true
        },
        "mediator_user": {
            "description": [
                "username of the mediator"
            ],
            "type": "str",
            "required": true
        },
        "mediator_password": {
            "description": [
                "password of the mediator"
            ],
            "type": "str",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_metrocluster": {
        "state": {
            "choices": [
                "present"
            ],
            "description": [
                "Present to set up a MetroCluster"
            ],
            "default": "present",
            "type": "str"
        },
        "dr_pairs": {
            "description": "disaster recovery pair",
            "type": "list",
            "required": true,
            "elements": "dict",
            "suboptions": {
                "node_name": {
                    "description": [
                        "the name of the main node"
                    ],
                    "required": true,
                    "type": "str"
                },
                "partner_node_name": {
                    "description": [
                        "the name of the main partner node"
                    ],
                    "required": true,
                    "type": "str"
                }
            }
        },
        "partner_cluster_name": {
            "description": [
                "The name of the partner Cluster"
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_metrocluster_dr_group": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": "add or remove DR groups",
            "default": "present",
            "type": "str"
        },
        "dr_pairs": {
            "description": "disaster recovery pairs",
            "type": "list",
            "required": true,
            "elements": "dict",
            "suboptions": {
                "node_name": {
                    "description": [
                        "the name of the main node"
                    ],
                    "required": true,
                    "type": "str"
                },
                "partner_node_name": {
                    "description": [
                        "the name of the main partner node"
                    ],
                    "required": true,
                    "type": "str"
                }
            }
        },
        "partner_cluster_name": {
            "description": [
                "The name of the partner cluster"
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_motd": {
        "state": {
            "description": [
                "If C(state=present) sets MOTD given in I(message) C(state=absent) removes it."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "motd_message": {
            "description": [
                "MOTD Text message.",
                "message is deprecated and will be removed to avoid a conflict with an Ansible internal variable."
            ],
            "type": "str",
            "default": "",
            "aliases": [
                "message"
            ]
        },
        "vserver": {
            "description": [
                "The name of the SVM motd should be set for."
            ],
            "required": true,
            "type": "str"
        },
        "show_cluster_motd": {
            "description": [
                "Set to I(false) if Cluster-level Message of the Day should not be shown"
            ],
            "type": "bool",
            "default": true
        }
    },
    "netapp.ontap.na_ontap_name_mappings": {
        "state": {
            "description": [
                "Whether the specified name mappings should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "client_match": {
            "description": [
                "Client workstation IP Address which is matched when searching for the pattern.",
                "Example '10.254.101.111/28'",
                "Client match value can be in any of the following formats, - As an IPv4 address with a subnet mask expressed as a number of bits; for instance, 10.1.12.0/24 - As an IPv6 address with a subnet mask expressed as a number of bits; for instance, fd20:8b1e:b255:4071::/64 - As an IPv4 address with a network mask; for instance, 10.1.16.0/255.255.255.0 - As a hostname"
            ],
            "type": "str"
        },
        "direction": {
            "description": [
                "Direction in which the name mapping is applied.",
                "The possible values are, krb_unix - Kerberos principal name to UNIX user name win_unix - Windows user name to UNIX user name unix_win - UNIX user name to Windows user name mapping s3_unix - S3 user name to UNIX user name mapping s3_win - S3 user name to Windows user name mapping",
                "s3_unix and s3_win requires ONTAP 9.12.1 or later."
            ],
            "choices": [
                "krb_unix",
                "win_unix",
                "unix_win",
                "s3_unix",
                "s3_win"
            ],
            "required": true,
            "type": "str"
        },
        "index": {
            "description": [
                "Position in the list of name mappings.",
                "Minimum value is 1 and maximum is 2147483647."
            ],
            "required": true,
            "type": "int"
        },
        "pattern": {
            "description": [
                "Pattern used to match the name while searching for a name that can be used as a replacement.",
                "The pattern is a UNIX-style regular expression.",
                "Regular expressions are case-insensitive when mapping from Windows to UNIX, and they are case-sensitive for mappings from Kerberos to UNIX and UNIX to Windows.",
                "Minimum length is 1 and maximum length is 256.",
                "Pattern should be unique for each index of vserver.",
                "Example ENGCIFS_AD_USER."
            ],
            "type": "str"
        },
        "replacement": {
            "description": [
                "The name that is used as a replacement, if the pattern associated with this entry matches.",
                "Minimum length is 1 and maximum length is 256.",
                "Example unix_user1."
            ],
            "type": "str"
        },
        "from_index": {
            "description": [
                "If no entry with index is found, it is created by reindexing the entry for from_index.",
                "If no entry is found for index and from_index, an error is reported.",
                "Minimum value is 1 and maximum is 2147483647.",
                "Requires ONTAP version 9.7 or later."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_name_service_switch": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified ns-switch should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "database_type": {
            "description": [
                "Name services switch database."
            ],
            "choices": [
                "hosts",
                "group",
                "passwd",
                "netgroup",
                "namemap"
            ],
            "required": true,
            "type": "str"
        },
        "sources": {
            "description": [
                "Type of sources.",
                "Possible values include files,dns,ldap,nis."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_ndmp": {
        "vserver": {
            "description": [
                "Name of the vserver."
            ],
            "required": true,
            "type": "str"
        },
        "abort_on_disk_error": {
            "description": [
                "Enable abort on disk error."
            ],
            "type": "bool"
        },
        "authtype": {
            "description": [
                "Authentication type."
            ],
            "type": "list",
            "elements": "str"
        },
        "backup_log_enable": {
            "description": [
                "Enable backup log."
            ],
            "type": "bool"
        },
        "data_port_range": {
            "description": [
                "Data port range. Modification not supported for data Vservers."
            ],
            "type": "str"
        },
        "debug_enable": {
            "description": [
                "Enable debug."
            ],
            "type": "bool"
        },
        "debug_filter": {
            "description": [
                "Debug filter."
            ],
            "type": "str"
        },
        "dump_detailed_stats": {
            "description": [
                "Enable logging of VM stats for dump."
            ],
            "type": "bool"
        },
        "dump_logical_find": {
            "description": [
                "Enable logical find for dump."
            ],
            "type": "str"
        },
        "enable": {
            "description": [
                "Enable NDMP on vserver."
            ],
            "type": "bool"
        },
        "fh_dir_retry_interval": {
            "description": [
                "FH throttle value for dir."
            ],
            "type": "int"
        },
        "fh_node_retry_interval": {
            "description": [
                "FH throttle value for node."
            ],
            "type": "int"
        },
        "ignore_ctime_enabled": {
            "description": [
                "Ignore ctime."
            ],
            "type": "bool"
        },
        "is_secure_control_connection_enabled": {
            "description": [
                "Is secure control connection enabled."
            ],
            "type": "bool"
        },
        "offset_map_enable": {
            "description": [
                "Enable offset map."
            ],
            "type": "bool"
        },
        "per_qtree_exclude_enable": {
            "description": [
                "Enable per qtree exclusion."
            ],
            "type": "bool"
        },
        "preferred_interface_role": {
            "description": [
                "Preferred interface role."
            ],
            "type": "list",
            "elements": "str"
        },
        "restore_vm_cache_size": {
            "description": [
                "Restore VM file cache size. Value range [4-1024]"
            ],
            "type": "int"
        },
        "secondary_debug_filter": {
            "description": [
                "Secondary debug filter."
            ],
            "type": "str"
        },
        "tcpnodelay": {
            "description": [
                "Enable TCP nodelay."
            ],
            "type": "bool"
        },
        "tcpwinsize": {
            "description": [
                "TCP window size."
            ],
            "type": "int"
        },
        "ndmp_user": {
            "description": [
                "The name of the NDMP user.",
                "This field cannot be specified in a PATCH method."
            ],
            "type": "str",
            "version_added": "23.0.0"
        }
    },
    "netapp.ontap.na_ontap_net_ifgrp": {
        "state": {
            "description": [
                "Whether the specified network interface group should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "distribution_function": {
            "description": [
                "Specifies the traffic distribution function for the ifgrp."
            ],
            "choices": [
                "mac",
                "ip",
                "sequential",
                "port"
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the interface group name.",
                "Not supported with REST, use C(ports) or C(from_lag_ports). LAG names are automatically created in REST and returned in module output.",
                "Required with ZAPI."
            ],
            "type": "str"
        },
        "mode": {
            "description": [
                "Specifies the link policy for the ifgrp."
            ],
            "type": "str"
        },
        "node": {
            "description": [
                "Specifies the name of node."
            ],
            "required": true,
            "type": "str"
        },
        "ports": {
            "aliases": [
                "port"
            ],
            "description": [
                "List of expected ports to be present in the interface group.",
                "If a port is present in this list, but not on the target, it will be added.",
                "If a port is not in the list, but present on the target, it will be removed.",
                "Make sure the list contains all ports you want to see on the target.",
                "With REST, ports in this list are used to find the current LAG port.",
                "If LAG is not found or only partial port matches, then C(from_lag_port) are used to get the current LAG.",
                "With REST, when C(state=absent) is set, all of the ports in ifgrp should be provided to delete it.",
                "Example C(ports=['e0c','e0a']) will delete ifgrp that has ports C(['e0c','e0a'])."
            ],
            "version_added": "2.8.0",
            "type": "list",
            "elements": "str"
        },
        "from_lag_ports": {
            "description": [
                "Only supported with REST and is ignored with ZAPI.",
                "Specify all the ports to find current LAG port.",
                "Ignored if LAG found with exact match of C(ports).",
                "Example if current LAG has ports C(['e0c','e0d']) and C(ports=['e0c','e0d']), then from_lag_ports will be ignored.",
                "If LAG not found with C(ports), then ports in this list are used to find the current LAG.",
                "Ports in this list are used only for finding current LAG, provide exact match of all the ports in the current LAG.",
                "Ignored when C(state=absent)."
            ],
            "version_added": "2.14.0",
            "type": "list",
            "elements": "str"
        },
        "broadcast_domain": {
            "description": [
                "Specify the broadcast_domain name.",
                "Only supported with REST and is ignored with ZAPI.",
                "Required with ONTAP 9.6 and 9.7, but optional with 9.8 or later."
            ],
            "type": "str",
            "version_added": "21.14.0"
        },
        "ipspace": {
            "description": [
                "Specify the ipspace for the broadcast domain.",
                "Only supported with REST and is ignored with ZAPI.",
                "Required with ONTAP 9.6 and 9.7, but optional with 9.8 or later."
            ],
            "type": "str",
            "version_added": "21.14.0"
        }
    },
    "netapp.ontap.na_ontap_net_port": {
        "state": {
            "description": [
                "Whether the specified net port should exist or not."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "node": {
            "description": [
                "Specifies the name of node."
            ],
            "required": true,
            "type": "str"
        },
        "ports": {
            "aliases": [
                "port"
            ],
            "description": [
                "Specifies the name of port(s)."
            ],
            "required": true,
            "type": "list",
            "elements": "str"
        },
        "mtu": {
            "description": [
                "Specifies the maximum transmission unit (MTU) reported by the port.",
                "Not supported with REST."
            ],
            "type": "int"
        },
        "autonegotiate_admin": {
            "description": [
                "Enables or disables Ethernet auto-negotiation of speed, duplex and flow control.",
                "Not supported with REST."
            ],
            "type": "bool"
        },
        "duplex_admin": {
            "description": [
                "Specifies the user preferred duplex setting of the port.",
                "Valid values auto, half, full",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "speed_admin": {
            "description": [
                "Specifies the user preferred speed setting of the port.",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "flowcontrol_admin": {
            "description": [
                "Specifies the user preferred flow control setting of the port.",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "ipspace": {
            "description": [
                "Specifies the port's associated IPspace name.",
                "The 'Cluster' ipspace is reserved for cluster ports.",
                "Not supported with REST.",
                "use netapp.ontap.na_ontap_ports to modify ipspace with REST."
            ],
            "type": "str"
        },
        "up_admin": {
            "description": [
                "Enables or disables the port."
            ],
            "type": "bool",
            "version_added": "21.8.0"
        }
    },
    "netapp.ontap.na_ontap_net_routes": {
        "state": {
            "description": [
                "Whether you want to create or delete a network route."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "The name of the vserver.",
                "Required when using ZAPI.",
                "When using REST, omit this parameter for cluster scoped routes, or set it to NULL."
            ],
            "type": "str"
        },
        "destination": {
            "description": [
                "Specify the route destination.",
                "Example 10.7.125.5/20, fd20:13::/64."
            ],
            "required": true,
            "type": "str"
        },
        "gateway": {
            "description": [
                "Specify the route gateway.",
                "Example 10.7.125.1, fd20:13::1."
            ],
            "required": true,
            "type": "str"
        },
        "metric": {
            "description": [
                "Specify the route metric.  If this field is not provided, ONTAP will default to 20.",
                "Supported from ONTAP 9.11.0 in REST.",
                "With REST, trying to modify destination or gateway will also reset metric to 20 in ONTAP 9.10.1 or earlier."
            ],
            "type": "int"
        },
        "from_destination": {
            "description": [
                "Specify the route destination that should be changed."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "from_gateway": {
            "description": [
                "Specify the route gateway that should be changed."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "from_metric": {
            "description": [
                "Specify the route metric that should be changed.",
                "This parameter is ignored, as the value is read from ONTAP.",
                "Not supported with REST, ignored with ZAPI."
            ],
            "version_added": "2.8.0",
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_net_subnet": {
        "state": {
            "description": [
                "Whether the specified network interface group should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "broadcast_domain": {
            "description": [
                "Specify the required broadcast_domain name for the subnet.",
                "A broadcast domain can not be modified after the subnet has been created"
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "Specify the subnet name."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the subnet to be renamed"
            ],
            "type": "str"
        },
        "gateway": {
            "description": [
                "Specify the gateway for the default route of the subnet."
            ],
            "type": "str"
        },
        "ipspace": {
            "description": [
                "Specify the ipspace for the subnet.",
                "The default value for this parameter is the default IPspace, named 'Default'."
            ],
            "type": "str"
        },
        "ip_ranges": {
            "description": [
                "Specify the list of IP address ranges associated with the subnet."
            ],
            "type": "list",
            "elements": "str"
        },
        "subnet": {
            "description": [
                "Specify the subnet (ip and mask)."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_net_vlan": {
        "state": {
            "description": [
                "Whether the specified network VLAN should exist or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "parent_interface": {
            "description": [
                "The interface that hosts the VLAN interface."
            ],
            "required": true,
            "type": "str"
        },
        "vlanid": {
            "description": [
                "The VLAN id. Ranges from 1 to 4094."
            ],
            "required": true,
            "type": "int"
        },
        "node": {
            "description": [
                "Node name of VLAN interface."
            ],
            "required": true,
            "type": "str"
        },
        "broadcast_domain": {
            "description": [
                "Specify the broadcast_domain name.",
                "Only supported with REST and is ignored with ZAPI.",
                "Required with 9.6 and 9.7, but optional with 9.8 or later."
            ],
            "type": "str",
            "version_added": "21.13.0"
        },
        "ipspace": {
            "description": [
                "Specify the ipspace for the broadcast domain.",
                "Only supported with REST and is ignored with ZAPI.",
                "Required with 9.6 and 9.7, but optional with 9.8 or later."
            ],
            "type": "str",
            "version_added": "21.13.0"
        },
        "enabled": {
            "description": [
                "Enable/Disable Net vlan.",
                "Only supported with REST and is ignored with ZAPI."
            ],
            "type": "bool",
            "version_added": "21.13.0"
        }
    },
    "netapp.ontap.na_ontap_nfs": {
        "state": {
            "description": [
                "Whether NFS should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "service_state": {
            "description": [
                "Whether the specified NFS should be enabled or disabled. Creates NFS service if doesnt exist."
            ],
            "choices": [
                "started",
                "stopped"
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "nfsv3": {
            "description": [
                "status of NFSv3."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "nfsv3_fsid_change": {
            "description": [
                "status of if NFSv3 clients see change in FSID as they traverse filesystems."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv4_fsid_change": {
            "description": [
                "status of if NFSv4 clients see change in FSID as they traverse filesystems."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "nfsv4": {
            "description": [
                "status of NFSv4."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "nfsv41": {
            "description": [
                "status of NFSv41.",
                "usage of C(nfsv4.1) is deprecated as it does not match Ansible naming convention.  The alias will be removed.",
                "please use C(nfsv41) exclusively for this option."
            ],
            "aliases": [
                "nfsv4.1"
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "nfsv41_pnfs": {
            "description": [
                "status of NFSv41 pNFS."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "nfsv4_numeric_ids": {
            "description": [
                "status of NFSv4 numeric ID's."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "vstorage_state": {
            "description": [
                "status of vstorage_state."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "nfsv4_id_domain": {
            "description": [
                "Name of the nfsv4_id_domain to use."
            ],
            "type": "str"
        },
        "nfsv40_acl": {
            "description": [
                "status of NFS v4.0 ACL feature"
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv40_read_delegation": {
            "description": [
                "status for NFS v4.0 read delegation feature."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv40_write_delegation": {
            "description": [
                "status for NFS v4.0 write delegation feature."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv41_acl": {
            "description": [
                "status of NFS v4.1 ACL feature"
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv41_read_delegation": {
            "description": [
                "status for NFS v4.1 read delegation feature."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv41_write_delegation": {
            "description": [
                "status for NFS v4.1 write delegation feature."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "nfsv40_referrals": {
            "description": [
                "status for NFS v4.0 referrals."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "nfsv41_referrals": {
            "description": [
                "status for NFS v4.1 referrals."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "tcp": {
            "description": [
                "Enable TCP (support from ONTAP 9.3 onward)."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "udp": {
            "description": [
                "Enable UDP (support from ONTAP 9.3 onward)."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str"
        },
        "showmount": {
            "description": [
                "Whether SVM allows showmount.",
                "With REST, supported from ONTAP 9.8 version."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "tcp_max_xfer_size": {
            "description": [
                "TCP Maximum Transfer Size (bytes). The default value is 65536.",
                "This option requires ONTAP 9.11.0 or later in REST."
            ],
            "version_added": "2.8.0",
            "type": "int"
        },
        "windows": {
            "description": [
                "This option can be set or modified when using REST.",
                "It requires ONTAP 9.11.0 or later."
            ],
            "version_added": "22.3.0",
            "type": "dict",
            "suboptions": {
                "default_user": {
                    "description": [
                        "Specifies the default Windows user for the NFS server."
                    ],
                    "type": "str"
                },
                "map_unknown_uid_to_default_user": {
                    "description": [
                        "Specifies whether or not the mapping of an unknown UID to the default Windows user is enabled."
                    ],
                    "type": "bool"
                },
                "v3_ms_dos_client_enabled": {
                    "description": [
                        "Specifies whether NFSv3 MS-DOS client support is enabled."
                    ],
                    "type": "bool"
                }
            }
        },
        "root": {
            "description": [
                "This option can be set or modified when using REST.",
                "It requires ONTAP 9.11.0 or later."
            ],
            "type": "dict",
            "version_added": "22.3.0",
            "suboptions": {
                "ignore_nt_acl": {
                    "description": [
                        "Specifies whether Windows ACLs affect root access from NFS.",
                        "If this option is enabled, root access from NFS ignores the NT ACL set on the file or directory."
                    ],
                    "type": "bool"
                },
                "skip_write_permission_check": {
                    "description": [
                        "Specifies if permission checks are to be skipped for NFS WRITE calls from root/owner.",
                        "For copying read-only files to a destination folder which has inheritable ACLs, this option must be enabled."
                    ],
                    "type": "bool"
                }
            }
        },
        "security": {
            "description": [
                "This option can be set or modified when using REST.",
                "It requires ONTAP 9.11.0 or later."
            ],
            "type": "dict",
            "version_added": "22.3.0",
            "suboptions": {
                "chown_mode": {
                    "description": [
                        "Specifies whether file ownership can be changed only by the superuser, or if a non-root user can also change file ownership.",
                        "If this option is set to restricted, file ownership can be changed only by the superuser, even though the on-disk permissions allow a non-root user to change file ownership.",
                        "If this option is set to unrestricted, file ownership can be changed by the superuser and by the non-root user, depending upon the access granted by on-disk permissions.",
                        "If this option is set to use-export-policy, file ownership can be changed in accordance with the relevant export rules."
                    ],
                    "choices": [
                        "restricted",
                        "unrestricted",
                        "use_export_policy"
                    ],
                    "type": "str"
                },
                "nt_acl_display_permission": {
                    "description": [
                        "Controls the permissions that are displayed to NFSv3 and NFSv4 clients on a file or directory that has an NT ACL set.",
                        "When true, the displayed permissions are based on the maximum access granted by the NT ACL to any user.",
                        "When false, the displayed permissions are based on the minimum access granted by the NT ACL to any user."
                    ],
                    "type": "bool"
                },
                "ntfs_unix_security": {
                    "description": [
                        "Specifies how NFSv3 security changes affect NTFS volumes.",
                        "If this option is set to ignore, ONTAP ignores NFSv3 security changes.",
                        "If this option is set to fail, this overrides the UNIX security options set in the relevant export rules.",
                        "If this option is set to use_export_policy, ONTAP processes NFSv3 security changes in accordance with the relevant export rules."
                    ],
                    "choices": [
                        "ignore",
                        "fail",
                        "use_export_policy"
                    ],
                    "type": "str"
                },
                "permitted_encryption_types": {
                    "description": [
                        "Specifies the permitted encryption types for Kerberos over NFS."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "rpcsec_context_idle": {
                    "description": [
                        "Specifies, in seconds, the amount of time a RPCSEC_GSS context is permitted to remain unused before it is deleted."
                    ],
                    "type": "int"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_node": {
        "name": {
            "description": [
                "The name for the node"
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "The name of the node to be renamed.  If I(name) already exists, no action will be performed."
            ],
            "type": "str"
        },
        "location": {
            "description": [
                "The location for the node"
            ],
            "type": "str"
        },
        "asset_tag": {
            "description": [
                "The asset tag for the node, not supported by REST"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_ntfs_dacl": {
        "state": {
            "description": [
                "Whether the specified NTFS DACL should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the NTFS DACL."
            ],
            "required": true,
            "type": "str"
        },
        "security_descriptor": {
            "description": [
                "Specifies the NTFS security descriptor."
            ],
            "required": true,
            "type": "str"
        },
        "access_type": {
            "description": [
                "Specifies DACL ACE's access type. Possible values."
            ],
            "choices": [
                "allow",
                "deny"
            ],
            "required": true,
            "type": "str"
        },
        "account": {
            "description": [
                "Specifies DACL ACE's SID or domain account name of NTFS security descriptor."
            ],
            "required": true,
            "type": "str"
        },
        "rights": {
            "description": [
                "Specifies DACL ACE's access rights. Mutually exclusive with advanced_access_rights."
            ],
            "choices": [
                "no_access",
                "full_control",
                "modify",
                "read_and_execute",
                "read",
                "write"
            ],
            "type": "str"
        },
        "apply_to": {
            "description": [
                "Specifies apply DACL entry."
            ],
            "choices": [
                "this_folder",
                "sub_folders",
                "files"
            ],
            "type": "list",
            "elements": "str"
        },
        "advanced_access_rights": {
            "description": [
                "Specifies DACL ACE's Advanced access rights. Mutually exclusive with rights."
            ],
            "choices": [
                "read_data",
                "write_data",
                "append_data",
                "read_ea",
                "write_ea",
                "execute_file",
                "delete_child",
                "read_attr",
                "write_attr",
                "delete",
                "read_perm",
                "write_perm",
                "write_owner",
                "full_control"
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_ntfs_sd": {
        "state": {
            "description": [
                "Whether the specified NTFS security descriptor should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the NTFS security descriptor."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the NTFS security descriptor name. Not modifiable."
            ],
            "required": true,
            "type": "str"
        },
        "owner": {
            "description": [
                "Specifies the owner's SID or domain account of the NTFS security descriptor.",
                "Need to provide the full path of the owner."
            ],
            "type": "str"
        },
        "group": {
            "description": [
                "Specifies the group's SID or domain account of the NTFS security descriptor.",
                "Need to provide the full path of the group."
            ],
            "required": false,
            "type": "str"
        },
        "control_flags_raw": {
            "description": [
                "Specifies the security descriptor control flags.",
                "1... .... .... .... = Self Relative",
                ".0.. .... .... .... = RM Control Valid",
                "..0. .... .... .... = SACL Protected",
                "...0 .... .... .... = DACL Protected",
                ".... 0... .... .... = SACL Inherited",
                ".... .0.. .... .... = DACL Inherited",
                ".... ..0. .... .... = SACL Inherit Required",
                ".... ...0 .... .... = DACL Inherit Required",
                ".... .... ..0. .... = SACL Defaulted",
                ".... .... ...0 .... = SACL Present",
                ".... .... .... 0... = DACL Defaulted",
                ".... .... .... .1.. = DACL Present",
                ".... .... .... ..0. = Group Defaulted",
                ".... .... .... ...0 = Owner Defaulted",
                "At present only the following flags are honored. Others are ignored.",
                "..0. .... .... .... = SACL Protected",
                "...0 .... .... .... = DACL Protected",
                ".... .... ..0. .... = SACL Defaulted",
                ".... .... .... 0... = DACL Defaulted",
                ".... .... .... ..0. = Group Defaulted",
                ".... .... .... ...0 = Owner Defaulted",
                "Convert the 16 bit binary flags and convert to decimal for the input."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_ntp": {
        "state": {
            "description": [
                "Whether the specified NTP server should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "server_name": {
            "description": [
                "The name of the NTP server to manage."
            ],
            "required": true,
            "type": "str"
        },
        "version": {
            "description": [
                "give version for NTP server"
            ],
            "choices": [
                "auto",
                "3",
                "4"
            ],
            "default": "auto",
            "type": "str"
        },
        "key_id": {
            "description": [
                "The symmetric authentication key ID being used for this time server."
            ],
            "type": "int",
            "version_added": "21.21.0"
        }
    },
    "netapp.ontap.na_ontap_ntp_key": {
        "state": {
            "description": [
                "Whether the specified NTP key should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "id": {
            "description": [
                "NTP symmetric authentication key ID. The ID must be in the range 1 to 65535."
            ],
            "required": true,
            "type": "int"
        },
        "digest_type": {
            "description": [
                "NTP symmetric authentication key type. Only SHA1 currently supported."
            ],
            "choices": [
                "sha1"
            ],
            "type": "str",
            "required": true
        },
        "value": {
            "description": [
                "NTP symmetric authentication key value. The value must be exactly 40 hexadecimal digits for SHA1 keys."
            ],
            "type": "str",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_nvme": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified NVMe should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "status_admin": {
            "description": [
                "Whether the status of NVMe should be up or down"
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_nvme_namespace": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified namespace should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "ostype": {
            "description": [
                "Specifies the ostype for initiators"
            ],
            "choices": [
                "windows",
                "linux",
                "vmware",
                "xen",
                "hyper_v"
            ],
            "type": "str"
        },
        "size": {
            "description": [
                "Size in bytes. Range is [0..2^63-1]."
            ],
            "type": "int"
        },
        "size_unit": {
            "description": [
                "The unit used to interpret the size parameter."
            ],
            "choices": [
                "bytes",
                "b",
                "kb",
                "mb",
                "gb",
                "tb",
                "pb",
                "eb",
                "zb",
                "yb"
            ],
            "type": "str",
            "default": "b"
        },
        "path": {
            "description": [
                "Namespace path.",
                "The name of the NVMe namespace.",
                "NVMe namespace names are paths of the form \"/vol/<volume>[/<qtree>]/<namespace>\" where the qtree name is optional.",
                "For ASA R2 systems, The path should match the format <name>[@<snapshot-name>]."
            ],
            "required": true,
            "type": "str"
        },
        "block_size": {
            "description": [
                "Size in bytes of a logical block. Possible values are 512 (Data ONTAP 9.6 and later), 4096. The default value is 4096."
            ],
            "choices": [
                512,
                4096
            ],
            "type": "int",
            "version_added": "20.5.0"
        },
        "provisioning_options": {
            "description": [
                "Options that are applied to the operation.",
                "This option is available only for ASA R2 systems."
            ],
            "type": "dict",
            "version_added": "23.0.0",
            "suboptions": {
                "count": {
                    "description": [
                        "The number of LUNs to provision with these properties.",
                        "Only POST requests based on space.size  are supported.",
                        "When provided, the name is considered a prefix, and a suffix of the form _<N> is generated where N is the next available numeric index, starting with 1."
                    ],
                    "type": "int"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_nvme_subsystem": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified subsystem should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "subsystem": {
            "description": [
                "Specifies the subsystem"
            ],
            "required": true,
            "type": "str"
        },
        "ostype": {
            "description": [
                "Specifies the ostype for initiators"
            ],
            "choices": [
                "windows",
                "linux",
                "vmware",
                "xen",
                "hyper_v"
            ],
            "type": "str"
        },
        "skip_host_check": {
            "description": [
                "Skip host check",
                "Required to delete an NVMe Subsystem with attached NVMe namespaces"
            ],
            "default": false,
            "type": "bool"
        },
        "skip_mapped_check": {
            "description": [
                "Skip mapped namespace check",
                "Required to delete an NVMe Subsystem with attached NVMe namespaces"
            ],
            "default": false,
            "type": "bool"
        },
        "hosts": {
            "description": [
                "List of host NQNs (NVMe Qualification Name) associated to the controller."
            ],
            "type": "list",
            "elements": "str"
        },
        "paths": {
            "description": [
                "List of Namespace paths to be associated with the subsystem.",
                "For ASA R2 systems, The paths should match the format <name>[@<snapshot-name>]."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_object_store": {
        "state": {
            "description": [
                "Whether the specified object store config should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "required": true,
            "description": [
                "The name of the object store config to manage."
            ],
            "type": "str"
        },
        "provider_type": {
            "description": [
                "The name of the object store config provider."
            ],
            "type": "str"
        },
        "server": {
            "description": [
                "Fully qualified domain name of the object store config."
            ],
            "type": "str"
        },
        "port": {
            "description": [
                "Port number of the object store that ONTAP uses when establishing a connection."
            ],
            "type": "int",
            "version_added": "21.9.0"
        },
        "container": {
            "description": [
                "Data bucket/container name used in S3 requests."
            ],
            "type": "str"
        },
        "access_key": {
            "description": [
                "Access key ID for AWS_S3 and SGWS provider types."
            ],
            "type": "str"
        },
        "secret_password": {
            "description": [
                "Secret access key for AWS_S3 and SGWS provider types."
            ],
            "type": "str"
        },
        "certificate_validation_enabled": {
            "description": [
                "Is SSL/TLS certificate validation enabled?",
                "If not specified, ONTAP will default to true."
            ],
            "type": "bool",
            "version_added": "21.9.0"
        },
        "ssl_enabled": {
            "description": [
                "Is SSL enabled?",
                "If not specified, ONTAP will default to true."
            ],
            "type": "bool",
            "version_added": "21.9.0"
        },
        "change_password": {
            "description": [
                "By default, the secret_password is used on create but ignored if the resource already exists.",
                "If set to true, the module always attempt to change the paswword as it cannot read the current value.",
                "When this is set to true, the module is not idempotent."
            ],
            "type": "bool",
            "default": false,
            "version_added": "21.13.0"
        },
        "owner": {
            "description": [
                "Owner of the target.  Cannot be modifed.",
                "With REST, allowed values are fabricpool or snapmirror.  A target can be used by only one feature.",
                "With ZAPI, the only allowed value is fabricpool.",
                "If absent, fabricpool is assumed on creation."
            ],
            "type": "str",
            "version_added": "21.13.0"
        }
    },
    "netapp.ontap.na_ontap_partitions": {
        "node": {
            "required": true,
            "type": "str",
            "description": [
                "Specifies the node that the partitions and disks should be assigned to."
            ]
        },
        "partition_count": {
            "required": true,
            "type": "int",
            "description": [
                "Total number of partitions that should be assigned to the owner."
            ]
        },
        "disk_type": {
            "required": true,
            "choices": [
                "ATA",
                "BSAS",
                "FCAL",
                "FSAS",
                "LUN",
                "MSATA",
                "SAS",
                "SSD",
                "SSD_NVM",
                "VMDISK",
                "unknown"
            ],
            "type": "str",
            "description": [
                "The type of disk that the partitions that should use."
            ]
        },
        "partition_type": {
            "required": true,
            "choices": [
                "data",
                "root",
                "data1",
                "data2"
            ],
            "type": "str",
            "description": [
                "The type of partiton being assigned either root, data, data1 or data2,"
            ]
        },
        "partitioning_method": {
            "required": true,
            "choices": [
                "root_data",
                "root_data1_data2"
            ],
            "type": "str",
            "description": [
                "The type of partiton method being used, either root_data or root_data1_data2."
            ]
        },
        "min_spares": {
            "description": [
                "Minimum spares disks or partitions required per type for the node."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_ports": {
        "state": {
            "description": [
                "Whether the specified port should be added or removed."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the SVM.",
                "Specify this option when operating on portset."
            ],
            "type": "str"
        },
        "names": {
            "description": [
                "List of ports."
            ],
            "type": "list",
            "elements": "str",
            "required": true
        },
        "resource_name": {
            "description": [
                "name of the portset or broadcast domain."
            ],
            "type": "str",
            "required": true
        },
        "resource_type": {
            "description": [
                "type of the resource to add a port to or remove a port from.",
                "adding or removing ports in portset requires ONTAP version 9.9 or later in REST"
            ],
            "choices": [
                "broadcast_domain",
                "portset"
            ],
            "required": true,
            "type": "str"
        },
        "ipspace": {
            "description": [
                "Specify the required ipspace for the broadcast domain.",
                "A domain ipspace can not be modified after the domain has been created."
            ],
            "type": "str"
        },
        "portset_type": {
            "description": [
                "Protocols accepted for portset."
            ],
            "choices": [
                "fcp",
                "iscsi",
                "mixed"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_portset": {
        "state": {
            "description": [
                "If you want to create a portset."
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "required": true,
            "description": [
                "Name of the SVM."
            ],
            "type": "str"
        },
        "name": {
            "required": true,
            "description": [
                "Name of the port set to create."
            ],
            "type": "str"
        },
        "type": {
            "description": [
                "Required for create in ZAPI.",
                "Default value is mixed if not specified at the time of creation in REST.",
                "Protocols accepted for this portset."
            ],
            "choices": [
                "fcp",
                "iscsi",
                "mixed"
            ],
            "type": "str"
        },
        "force": {
            "description": [
                "If 'false' or not specified, the request will fail if there are any igroups bound to this portset.",
                "If 'true', forcibly destroy the portset, even if there are existing igroup bindings."
            ],
            "type": "bool",
            "default": false
        },
        "ports": {
            "description": [
                "Specify the ports associated with this portset. Should be comma separated.",
                "It represents the expected state of a list of ports at any time, and replaces the current value of ports.",
                "Adds a port if it is specified in expected state but not in current state.",
                "Deletes a port if it is in current state but not in expected state."
            ],
            "type": "list",
            "elements": "str"
        }
    },
    "netapp.ontap.na_ontap_publickey": {
        "state": {
            "description": [
                "Whether the specified publickey should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "account": {
            "description": [
                "The name of the user account."
            ],
            "required": true,
            "type": "str"
        },
        "comment": {
            "description": [
                "Optional comment for the public key."
            ],
            "type": "str"
        },
        "delete_all": {
            "description": [
                "If index is not present, with state=absent, delete all public key for this user account."
            ],
            "type": "bool",
            "default": false
        },
        "index": {
            "description": [
                "Index number for the public key.",
                "If index is not present, with state=present, the public key is always added, using the next available index.",
                "If index is not present, with state=present, the module is not idempotent.",
                "If index is not present, with state=absent, if only one key is found, it is deleted.  Otherwise an error is reported.",
                "See also C(delete_all) option."
            ],
            "type": "int"
        },
        "public_key": {
            "description": [
                "The public key."
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "Omit this option for cluster scoped user accounts."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_qos_adaptive_policy_group": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified policy group should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the policy group to manage."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "from_name": {
            "description": [
                "Name of the existing policy group to be renamed to name."
            ],
            "type": "str"
        },
        "absolute_min_iops": {
            "description": [
                "Absolute minimum IOPS defined by this policy."
            ],
            "type": "str"
        },
        "expected_iops": {
            "description": [
                "Minimum expected IOPS defined by this policy."
            ],
            "type": "str"
        },
        "peak_iops": {
            "description": [
                "Maximum possible IOPS per allocated or used TB|GB."
            ],
            "type": "str"
        },
        "peak_iops_allocation": {
            "choices": [
                "allocated_space",
                "used_space"
            ],
            "description": [
                "Whether peak_iops is specified by allocated or used space."
            ],
            "default": "used_space",
            "type": "str"
        },
        "force": {
            "type": "bool",
            "default": false,
            "description": [
                "Setting to 'true' forces the deletion of the workloads associated with the policy group along with the policy group."
            ]
        }
    },
    "netapp.ontap.na_ontap_qos_policy_group": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified policy group should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the policy group to manage."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the existing policy group to be renamed to name."
            ],
            "type": "str"
        },
        "max_throughput": {
            "description": [
                "Maximum throughput defined by this policy.",
                "Not supported with REST, use C(fixed_qos_options)."
            ],
            "type": "str"
        },
        "min_throughput": {
            "description": [
                "Minimum throughput defined by this policy.",
                "Not supported with REST, use C(fixed_qos_options)."
            ],
            "type": "str"
        },
        "is_shared": {
            "description": [
                "Whether the SLOs of the policy group are shared between the workloads or if the SLOs are applied separately to each workload.",
                "Not supported with REST, use C(fixed_qos_options)."
            ],
            "type": "bool",
            "version_added": "20.12.0"
        },
        "force": {
            "type": "bool",
            "description": [
                "Setting to 'true' forces the deletion of the workloads associated with the policy group along with the policy group.",
                "Not supported with REST."
            ]
        },
        "fixed_qos_options": {
            "version_added": "21.19.0",
            "type": "dict",
            "description": [
                "Set Minimum and Maximum throughput defined by this policy.",
                "Only supported with REST.",
                "Required one of throughtput options when creating qos_policy."
            ],
            "suboptions": {
                "capacity_shared": {
                    "description": [
                        "Whether the SLOs of the policy group are shared between the workloads or if the SLOs are applied separately to each workload.",
                        "Default value is False if not used in creating qos policy."
                    ],
                    "type": "bool"
                },
                "max_throughput_iops": {
                    "description": [
                        "Maximum throughput defined by this policy. It is specified in terms of IOPS.",
                        "0 means no maximum throughput is enforced."
                    ],
                    "type": "int"
                },
                "max_throughput_mbps": {
                    "description": [
                        "Maximum throughput defined by this policy. It is specified in terms of Mbps.",
                        "0 means no maximum throughput is enforced."
                    ],
                    "type": "int"
                },
                "min_throughput_iops": {
                    "description": [
                        "Minimum throughput defined by this policy. It is specified in terms of IOPS.",
                        "0 means no minimum throughput is enforced.",
                        "These floors are not guaranteed on non-AFF platforms or when FabricPool tiering policies are set."
                    ],
                    "type": "int"
                },
                "min_throughput_mbps": {
                    "description": [
                        "Minimum throughput defined by this policy. It is specified in terms of Mbps.",
                        "0 means no minimum throughput is enforced.",
                        "Requires ONTAP 9.8 or later, and REST support."
                    ],
                    "type": "int"
                }
            }
        },
        "adaptive_qos_options": {
            "version_added": "21.19.0",
            "type": "dict",
            "description": [
                "Adaptive QoS policy-groups define measurable service level objectives (SLOs) that adjust based on the storage object used space and the storage object allocated space.",
                "Only supported with REST."
            ],
            "suboptions": {
                "absolute_min_iops": {
                    "description": [
                        "Specifies the absolute minimum IOPS that is used as an override when the expected_iops is less than this value.",
                        "These floors are not guaranteed on non-AFF platforms or when FabricPool tiering policies are set."
                    ],
                    "type": "int",
                    "required": true
                },
                "expected_iops": {
                    "description": [
                        "Expected IOPS. Specifies the minimum expected IOPS per TB allocated based on the storage object allocated size.",
                        "These floors are not guaranteed on non-AFF platforms or when FabricPool tiering policies are set."
                    ],
                    "type": "int",
                    "required": true
                },
                "peak_iops": {
                    "description": [
                        "Peak IOPS. Specifies the maximum possible IOPS per TB allocated based on the storage object allocated size or the storage object used size."
                    ],
                    "type": "int",
                    "required": true
                },
                "block_size": {
                    "description": [
                        "Specifies the block size.",
                        "Requires ONTAP 9.10.1 or later."
                    ],
                    "type": "str",
                    "required": false,
                    "choices": [
                        "any",
                        "4k",
                        "8k",
                        "16k",
                        "32k",
                        "64k",
                        "128k"
                    ],
                    "version_added": "22.6.0"
                },
                "expected_iops_allocation": {
                    "description": [
                        "Specifies the size to be used to calculate expected IOPS per TB.",
                        "Supported only with REST; requires ONTAP 9.10.1 or later."
                    ],
                    "type": "str",
                    "required": false,
                    "choices": [
                        "used_space",
                        "allocated_space"
                    ],
                    "version_added": "22.8.0"
                },
                "peak_iops_allocation": {
                    "description": [
                        "Specifies the size to be used to calculate peak IOPS per TB.",
                        "Supported only with REST; requires ONTAP 9.10.1 or later."
                    ],
                    "type": "str",
                    "required": false,
                    "choices": [
                        "used_space",
                        "allocated_space"
                    ],
                    "version_added": "22.8.0"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_qtree": {
        "state": {
            "description": [
                "Whether the specified qtree should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the qtree to manage.",
                "With REST, this can also be a path."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the qtree to be renamed."
            ],
            "version_added": "2.7.0",
            "type": "str"
        },
        "flexvol_name": {
            "description": [
                "The name of the FlexVol the qtree should exist on."
            ],
            "required": true,
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "export_policy": {
            "description": [
                "The name of the export policy to apply."
            ],
            "version_added": "2.9.0",
            "type": "str"
        },
        "security_style": {
            "description": [
                "The security style for the qtree."
            ],
            "choices": [
                "unix",
                "ntfs",
                "mixed"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "oplocks": {
            "description": [
                "Whether the oplocks should be enabled or not for the qtree."
            ],
            "choices": [
                "enabled",
                "disabled"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "unix_permissions": {
            "description": [
                "File permissions bits of the qtree.",
                "Accepts either octal or string format.",
                "Examples 0777, 777 in octal and ---rwxrwxrwx, sstrwxrwxrwx, rwxrwxrwx in string format."
            ],
            "version_added": "2.9.0",
            "type": "str"
        },
        "force_delete": {
            "description": [
                "Whether the qtree should be deleted even if files still exist.",
                "Note that the default of true reflect the REST API behavior.",
                "a value of false is not supported with REST."
            ],
            "type": "bool",
            "default": true,
            "version_added": "20.8.0"
        },
        "wait_for_completion": {
            "description": [
                "Only applicable for REST.  When using ZAPI, the deletion is always synchronous.",
                "Deleting a qtree may take time if many files need to be deleted.",
                "Set this parameter to 'true' for synchronous execution during delete.",
                "Set this parameter to 'false' for asynchronous execution.",
                "For asynchronous, execution exits as soon as the request is sent, and the qtree is deleted in background."
            ],
            "type": "bool",
            "default": true,
            "version_added": "2.9.0"
        },
        "time_out": {
            "description": [
                "Maximum time to wait for qtree deletion in seconds when wait_for_completion is True.",
                "Error out if task is not completed in defined time.",
                "Default is set to 3 minutes."
            ],
            "default": 180,
            "type": "int",
            "version_added": "2.9.0"
        },
        "unix_user": {
            "description": [
                "The user set as owner of the qtree.",
                "Only supported with REST and ONTAP 9.9 or later."
            ],
            "type": "str",
            "version_added": "21.21.0"
        },
        "unix_group": {
            "description": [
                "The group set as owner of the qtree.",
                "Only supported with REST and ONTAP 9.9 or later."
            ],
            "type": "str",
            "version_added": "21.21.0"
        }
    },
    "netapp.ontap.na_ontap_quotas": {
        "state": {
            "description": [
                "Whether the specified quota should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "required": true,
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str"
        },
        "volume": {
            "description": [
                "The name of the volume that the quota resides on."
            ],
            "required": true,
            "type": "str"
        },
        "quota_target": {
            "description": [
                "The quota target of the type specified.",
                "Required to create or modify a rule.",
                "users and group takes quota_target value in REST.",
                "For default user and group quota rules, the quota_target must be specified as \"\"."
            ],
            "type": "str"
        },
        "qtree": {
            "description": [
                "Name of the qtree for the quota.",
                "For user or group rules, it can be the qtree name or \"\" if no qtree.",
                "For tree type rules, this field must be \"\"."
            ],
            "default": "",
            "type": "str"
        },
        "type": {
            "description": [
                "The type of quota rule",
                "Required to create or modify a rule."
            ],
            "choices": [
                "user",
                "group",
                "tree"
            ],
            "type": "str"
        },
        "policy": {
            "description": [
                "Name of the quota policy from which the quota rule should be obtained.",
                "Only supported with ZAPI.",
                "Multiple alternative quota policies (active and backup) are not supported in REST.",
                "REST manages the quota rules of the active policy."
            ],
            "type": "str"
        },
        "set_quota_status": {
            "description": [
                "Whether the specified volume should have quota status on or off."
            ],
            "type": "bool"
        },
        "perform_user_mapping": {
            "description": [
                "Whether quota management will perform user mapping for the user specified in quota-target.",
                "User mapping can be specified only for a user quota rule."
            ],
            "type": "bool",
            "aliases": [
                "user_mapping"
            ],
            "version_added": "20.12.0"
        },
        "file_limit": {
            "description": [
                "The number of files that the target can have.",
                "use '-' to reset file limit."
            ],
            "type": "str"
        },
        "disk_limit": {
            "description": [
                "The amount of disk space that is reserved for the target.",
                "Expects a number followed with B (for bytes), KB, MB, GB, TB.",
                "If the unit is not present KB is used by default.",
                "Examples - 10MB, 20GB, 1TB, 20B, 10.",
                "In REST, if limit is less than 1024 bytes, the value is rounded up to 1024 bytes.",
                "use '-' to reset disk limit."
            ],
            "type": "str"
        },
        "soft_file_limit": {
            "description": [
                "The number of files the target would have to exceed before a message is logged and an SNMP trap is generated.",
                "use '-' to reset soft file limit."
            ],
            "type": "str"
        },
        "soft_disk_limit": {
            "description": [
                "The amount of disk space the target would have to exceed before a message is logged and an SNMP trap is generated.",
                "See C(disk_limit) for format description.",
                "In REST, if limit is less than 1024 bytes, the value is rounded up to 1024 bytes.",
                "use '-' to reset soft disk limit."
            ],
            "type": "str"
        },
        "threshold": {
            "description": [
                "The amount of disk space the target would have to exceed before a message is logged.",
                "See C(disk_limit) for format description.",
                "Only supported with ZAPI."
            ],
            "type": "str"
        },
        "activate_quota_on_change": {
            "description": [
                "Method to use to activate quota on a change.",
                "Default value is 'resize' in ZAPI.",
                "With REST, Changes to quota rule limits C(file_limit), C(disk_limit), C(soft_file_limit), and C(soft_disk_limit) are applied automatically without requiring a quota resize operation."
            ],
            "choices": [
                "resize",
                "reinitialize",
                "none"
            ],
            "type": "str",
            "version_added": "20.12.0"
        }
    },
    "netapp.ontap.na_ontap_quota_policy": {
        "state": {
            "description": [
                "Whether the specified quota policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the quota policy."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "Specifies the quota policy name to create or rename to."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the existing quota policy to be renamed to name."
            ],
            "type": "str"
        },
        "auto_assign": {
            "description": [
                "when true, assign the policy to the vserver, whether it is newly created, renamed, or already exists.",
                "when true, the policy identified by name replaces the already assigned policy.",
                "when false, the policy is created if it does not already exist but is not assigned."
            ],
            "type": "bool",
            "default": true,
            "version_added": "20.12.0"
        }
    },
    "netapp.ontap.na_ontap_restit": {
        "api": {
            "description": [
                "The REST API to call (eg I(cluster/software), I(svms/svm))."
            ],
            "required": true,
            "type": "str"
        },
        "method": {
            "description": [
                "The REST method to use."
            ],
            "default": "GET",
            "type": "str"
        },
        "query": {
            "description": [
                "A list of dictionaries for the query parameters"
            ],
            "type": "dict"
        },
        "body": {
            "description": [
                "A dictionary for the info parameter"
            ],
            "type": "dict",
            "aliases": [
                "info"
            ]
        },
        "vserver_name": {
            "description": [
                "if provided, forces vserver tunneling.  username identifies a cluster admin account."
            ],
            "type": "str"
        },
        "vserver_uuid": {
            "description": [
                "if provided, forces vserver tunneling.  username identifies a cluster admin account."
            ],
            "type": "str"
        },
        "hal_linking": {
            "description": [
                "if true, HAL-encoded links are returned in the response."
            ],
            "default": false,
            "type": "bool"
        },
        "wait_for_completion": {
            "description": [
                "when true, POST/PATCH/DELETE can be handled synchronously and asynchronously.",
                "if the response indicates that a job is in progress, the job status is checked periodically until is completes.",
                "when false, the call returns immediately."
            ],
            "type": "bool",
            "default": false,
            "version_added": "21.14.0"
        },
        "files": {
            "description": [
                "A dictionary for the parameters when using multipart/form-data.",
                "This is very infrequently needed, but required to write a file (see examples)",
                "When present, requests will automatically set the Content-Type header to multipart/form-data."
            ],
            "type": "dict",
            "version_added": "21.24.0"
        },
        "accept_header": {
            "description": [
                "Value for the Accept request HTTP header.",
                "This is very infrequently needed, but required to read a file (see examples).",
                "For most cases, omit this field.  Set it to \"multipart/form-data\" when expecting such a format.",
                "By default the module is using \"application/json\" or \"application/hal+json\" when hal_linking is true."
            ],
            "type": "str",
            "version_added": "21.24.0"
        }
    },
    "netapp.ontap.na_ontap_rest_cli": {
        "command": {
            "description": [
                "A CLI command."
            ],
            "required": true,
            "type": "str"
        },
        "verb": {
            "description": [
                "Define which action to perform with the provided command.",
                "Values are mapped to show, create, modify, delete.",
                "OPTIONS is useful to know which verbs are supported by the REST API"
            ],
            "choices": [
                "GET",
                "POST",
                "PATCH",
                "DELETE",
                "OPTIONS"
            ],
            "required": true,
            "type": "str"
        },
        "params": {
            "description": [
                "a dictionary of parameters to pass into the api call"
            ],
            "type": "dict"
        },
        "body": {
            "description": [
                "a dictionary for info specification"
            ],
            "type": "dict"
        }
    },
    "netapp.ontap.na_ontap_rest_info": {
        "state": {
            "type": "str",
            "description": [
                "deprecated as of 21.1.0.",
                "this option was ignored and continues to be ignored."
            ]
        },
        "gather_subset": {
            "type": "list",
            "elements": "str",
            "description": [
                "When supplied, this argument will restrict the information collected to a given subset.",
                "Either the REST API or the ZAPI info name can be given. Possible values for this argument include",
                "application/applications or application_info",
                "application/consistency-groups",
                "application/templates or application_template_info",
                "cloud/targets or cloud_targets_info",
                "cluster",
                "cluster/chassis or cluster_chassis_info",
                "cluster/counter/tables",
                "cluster/firmware/history",
                "cluster/jobs or cluster_jobs_info",
                "cluster/licensing/capacity-pools",
                "cluster/licensing/license-managers",
                "cluster/licensing/licenses or license_info",
                "cluster/mediators",
                "cluster/metrics or cluster_metrics_info",
                "cluster/metrocluster or metrocluster_info",
                "cluster/metrocluster/diagnostics or cluster_metrocluster_diagnostics or metrocluster_check_info",
                "cluster/metrocluster/dr-groups",
                "cluster/metrocluster/interconnects",
                "cluster/metrocluster/nodes or metrocluster-node-get-iter",
                "cluster/metrocluster/operations",
                "cluster/metrocluster/svms",
                "cluster/nodes or cluster_node_info or sysconfig_info",
                "cluster/ntp/keys",
                "cluster/ntp/servers or ntp_server_info",
                "cluster/peers or cluster_peer_info",
                "cluster/schedules or cluster_schedules or job_schedule_cron_info",
                "cluster/sensors",
                "cluster/software or ontap_system_version or  cluster_image_info",
                "cluster/software/download or cluster_software_download",
                "cluster/software/history or cluster_software_history",
                "cluster/software/packages or cluster_software_packages",
                "cluster/web",
                "name-services/cache/group-membership/settings",
                "name-services/cache/host/settings",
                "name-services/cache/netgroup/settings",
                "name-services/cache/setting",
                "name-services/cache/unix-group/settings",
                "name-services/dns or svm_dns_config_info or net_dns_info",
                "name-services/ldap or svm_ldap_config_info or ldap_client or ldap_config",
                "name-services/ldap-schemas",
                "name-services/local-hosts",
                "name-services/name-mappings or svm_name_mapping_config_info",
                "name-services/nis or svm_nis_config_info",
                "name-services/unix-groups",
                "name-services/unix-users",
                "network/ethernet/broadcast-domains or broadcast_domains_info or net_port_broadcast_domain_info",
                "network/ethernet/ports or network_ports_info or  net_port_info",
                "network/ethernet/switch/ports",
                "network/ethernet/switches or cluster_switch_info",
                "network/fc/fabrics",
                "network/fc/interfaces",
                "network/fc/logins or san_fc_logins_info",
                "network/fc/ports",
                "network/fc/wwpn-aliases or san_fc_wppn-aliases or fcp_alias_info",
                "network/http-proxy",
                "network/ip/bgp/peer-groups",
                "network/ip/interfaces or ip_interfaces_info or net_interface_info",
                "network/ip/routes or ip_routes_info or net_routes_info",
                "network/ip/service-policies or ip_service_policies or net_interface_service_policy_info",
                "network/ip/subnets",
                "network/ipspaces or network_ipspaces_info or net_ipspaces_info",
                "private/support/alerts or sys_cluster_alerts",
                "private/cli/vserver/security/file-directory or file_directory_security",
                "protocols/active-directory",
                "protocols/audit",
                "protocols/cifs/connections",
                "protocols/cifs/domains",
                "protocols/cifs/group-policies",
                "protocols/cifs/home-directory/search-paths or cifs_home_directory_info",
                "protocols/cifs/local-groups",
                "protocols/cifs/local-users",
                "protocols/cifs/netbios",
                "protocols/cifs/services or cifs_services_info or cifs_options_info",
                "protocols/cifs/session/files",
                "protocols/cifs/sessions",
                "protocols/cifs/shadow-copies",
                "protocols/cifs/shadowcopy-sets",
                "protocols/cifs/shares or cifs_share_info",
                "protocols/cifs/users-and-groups/privileges",
                "protocols/cifs/unix-symlink-mapping",
                "protocols/fpolicy",
                "protocols/locks",
                "protocols/ndmp",
                "protocols/ndmp/nodes",
                "protocols/ndmp/sessions",
                "protocols/ndmp/svms",
                "protocols/nfs/connected-clients",
                "protocols/nfs/connected-client-maps",
                "protocols/nfs/connected-client-settings",
                "protocols/nfs/export-policies or export_policy_info",
                "protocols/nfs/export-policies/rules B(Requires the owning_resource to be set)",
                "protocols/nfs/kerberos/interfaces",
                "protocols/nfs/kerberos/realms or kerberos_realm_info",
                "protocols/nfs/services or vserver_nfs_info or nfs_info",
                "protocols/nvme/interfaces or nvme_interface_info",
                "protocols/nvme/services or nvme_info",
                "protocols/nvme/subsystems or nvme_subsystem_info",
                "protocols/nvme/subsystem-controllers",
                "protocols/nvme/subsystem-maps",
                "protocols/s3/buckets",
                "protocols/s3/services",
                "protocols/san/fcp/services or san_fcp_services or fcp_service_info",
                "protocols/san/igroups or nitiator_groups_info or igroup_info",
                "protocols/san/iscsi/credentials or san_iscsi_credentials",
                "protocols/san/iscsi/services or san_iscsi_services or iscsi_service_info",
                "protocols/san/iscsi/sessions",
                "protocols/san/lun-maps or san_lun_maps or lun_map_info",
                "protocols/san/portsets",
                "protocols/san/vvol-bindings",
                "protocols/vscan or vscan_status_info or vscan_info",
                "protocols/vscan/on-access-policies B(Requires the owning_resource to be set)",
                "protocols/vscan/on-demand-policies B(Requires the owning_resource to be set)",
                "protocols/vscan/scanner-pools B(Requires the owning_resource to be set)",
                "protocols/vscan/server-status or vscan_connection_status_all_info",
                "security",
                "security/accounts or security_login_info or security_login_account_info",
                "security/anti-ransomware/suspects",
                "security/audit",
                "security/audit/destinations or cluster_log_forwarding_info",
                "security/audit/messages",
                "security/authentication/cluster/ad-proxy",
                "security/authentication/cluster/ldap",
                "security/authentication/cluster/nis",
                "security/authentication/cluster/saml-sp",
                "security/authentication/publickeys",
                "security/aws-kms",
                "security/azure-key-vaults",
                "security/certificates",
                "security/gcp-kms",
                "security/ipsec",
                "security/ipsec/ca-certificates",
                "security/ipsec/policies",
                "security/ipsec/security-associations",
                "security/key-manager-configs",
                "security/key-managers",
                "security/key-stores",
                "security/login/messages",
                "security/multi-admin-verify",
                "security/multi-admin-verify/approval-groups",
                "security/multi-admin-verify/requests",
                "security/multi-admin-verify/rules",
                "security/roles or security_login_rest_role_info",
                "security/ssh",
                "security/ssh/svms",
                "snapmirror/policies or snapmirror_policy_info",
                "snapmirror/relationships or snapmirror_info",
                "storage/aggregates or aggregate_info",
                "storage/bridges or storage_bridge_info",
                "storage/cluster",
                "storage/disks or disk_info",
                "storage/file/clone/split-loads",
                "storage/file/clone/split-status",
                "storage/file/clone/tokens",
                "storage/file/moves",
                "storage/flexcache/flexcaches or storage_flexcaches_info",
                "storage/flexcache/origins or storage_flexcaches_origin_info",
                "storage/luns or storage_luns_info or lun_info (if serial_number is present, serial_hex and naa_id are computed)",
                "storage/namespaces or storage_NVMe_namespaces or nvme_namespace_info",
                "storage/pools",
                "storage/ports or storage_ports_info",
                "storage/qos/policies or storage_qos_policies or qos_policy_info or qos_adaptive_policy_info",
                "storage/qos/workloads",
                "storage/qtrees or storage_qtrees_config or qtree_info",
                "storage/quota/reports or storage_quota_reports or quota_report_info",
                "storage/quota/rules or storage_quota_policy_rules",
                "storage/shelves or storage_shelves_config or shelf_info",
                "storage/snaplock/audit-logs",
                "storage/snaplock/compliance-clocks",
                "storage/snaplock/event-retention/operations",
                "storage/snaplock/event-retention/policies",
                "storage/snaplock/file-fingerprints",
                "storage/snaplock/litigations",
                "storage/snapshot-policies or storage_snapshot_policies or snapshot_policy_info",
                "storage/switches",
                "storage/tape-devices",
                "storage/volumes or volume_info",
                "storage/volumes/snapshots B(Requires the owning_resource to be set)",
                "storage/volume-efficiency-policies or sis_policy_info",
                "support/autosupport or autosupport_config_info",
                "support/autosupport/check or autosupport_check_info",
                "support/autosupport/messages or autosupport_messages_history",
                "support/auto-update",
                "support/auto-update/configurations",
                "support/auto-update/updates",
                "support/configuration-backup",
                "support/configuration-backup/backups",
                "support/coredump/coredumps",
                "support/ems or support_ems_config",
                "support/ems/destinations or event_notification_info or event_notification_destination_info",
                "support/ems/events or support_ems_events",
                "support/ems/filters or support_ems_filters",
                "support/ems/messages",
                "support/snmp",
                "support/snmp/traphosts",
                "support/snmp/users",
                "svm/migrations",
                "svm/peers or svm_peers_info or vserver_peer_info",
                "svm/peer-permissions or svm_peer-permissions_info",
                "svm/svms or vserver_info",
                "B(The following do not have direct Rest API equivalent)",
                "aggr_efficiency_info",
                "cifs_vserver_security_info",
                "clock_info",
                "cluster_identity_info",
                "net_vlan_info",
                "sis_info",
                "snapmirror_destination_info",
                "system_node_info",
                "volume_space_info",
                "Can specify a list of values to include a larger subset.",
                "REST APIs are supported with ONTAP 9.6 onwards."
            ],
            "default": "demo"
        },
        "max_records": {
            "type": "int",
            "description": [
                "Maximum number of records returned in a single call."
            ],
            "default": 1024
        },
        "fields": {
            "type": "list",
            "elements": "str",
            "description": [
                "Request specific fields from subset.",
                "Recommended - '<list of fields>' to return specified fields, only one subset will be allowed.",
                "Discouraged - '*' to return all the fields, one or more subsets are allowed. This option can be used for discovery, but is discouraged in production.",
                "Stongly discouraged - '**' to return all the fields, one or more subsets are allowed. This option can put an extra load on the system and should not be used in production.",
                "Limited - '' to return default fields, generally the properties that uniquely identify the record (keys). Other data is not returned by default and need to be explicitly called for using the field name or *.",
                "If the option is not present, return default fields for that API (see '' above)."
            ],
            "version_added": "20.6.0"
        },
        "parameters": {
            "description": [
                "Allows for any rest option to be passed in"
            ],
            "type": "dict",
            "version_added": "20.7.0"
        },
        "use_python_keys": {
            "description": [
                "If true, I(/) in the returned dictionary keys are translated to I(_).",
                "It makes it possible to use a . notation when processing the output.",
                "For instance I(ontap_info[\"svm/svms\"]) can be accessed as I(ontap_info.svm_svms)."
            ],
            "type": "bool",
            "default": false,
            "version_added": "21.9.0"
        },
        "owning_resource": {
            "description": [
                "Some resources cannot be accessed directly.  You need to select them based on the owner or parent.  For instance, volume for a snapshot.",
                "The following subsets require an owning resource, and the following suboptions when uuid is not present.",
                "<storage/volumes/snapshots>  B(volume_name) is the volume name, B(svm_name) is the owning vserver name for the volume.",
                "<protocols/nfs/export-policies/rules> B(policy_name) is the name of the policy, B(svm_name) is the owning vserver name for the policy, B(rule_index) is the rule index.",
                "<protocols/vscan/on-access-policies> B(svm_name) is the owning vserver name for the vscan",
                "<protocols/vscan/on-demand-policies> B(svm_name) is the owning vserver name for the vscan",
                "<protocols/vscan/scanner-pools> B(svm_name) is the owning vserver name for the vscan"
            ],
            "type": "dict",
            "version_added": "21.19.0"
        },
        "ignore_api_errors": {
            "description": [
                "List of substrings.",
                "If a substring is contained in an error message when fetching a subset, the module does not fail and the error is reported in the subset."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "21.23.0"
        },
        "hal_linking": {
            "description": [
                "if false, HAL-encoded links are disabled in the REST calls."
            ],
            "default": true,
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_s3_buckets": {
        "state": {
            "description": [
                "Whether the specified S3 bucket should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the S3 or NAS bucket."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "aggregates": {
            "description": [
                "List of aggregates names to use for the S3 bucket.",
                "This option is not supported when I(type=nas)."
            ],
            "type": "list",
            "elements": "str"
        },
        "constituents_per_aggregate": {
            "description": [
                "Number of constituents per aggregate.",
                "This option is not supported when I(type=nas)."
            ],
            "type": "int"
        },
        "size": {
            "description": [
                "Size of the S3 bucket in bytes.",
                "This option is not supported when I(type=nas)."
            ],
            "type": "int"
        },
        "comment": {
            "description": [
                "Comment for the S3 bucket."
            ],
            "type": "str"
        },
        "type": {
            "description": [
                "Specifies the bucket type. Valid values are \"s3\"and \"nas\"."
            ],
            "type": "str",
            "choices": [
                "s3",
                "nas"
            ],
            "version_added": "22.6.0"
        },
        "nas_path": {
            "description": [
                "Specifies the NAS path to which the nas bucket corresponds to."
            ],
            "type": "str",
            "version_added": "22.7.0"
        },
        "versioning_state": {
            "description": [
                "Specifies the versioning state of the bucket.",
                "The versioning state cannot be modified to 'disabled' from any other state.",
                "Requires ONTAP 9.11.1 or later."
            ],
            "type": "str",
            "choices": [
                "disabled",
                "enabled",
                "suspended"
            ],
            "version_added": "22.13.0"
        },
        "policy": {
            "description": [
                "Access policy uses the Amazon Web Services (AWS) policy language syntax to allow S3 tenants to create access policies to their data"
            ],
            "type": "dict",
            "suboptions": {
                "statements": {
                    "description": [
                        "Policy statements are built using this structure to specify permissions",
                        "Grant <Effect> to allow/deny <Principal> to perform <Action> on <Resource> when <Condition> applies"
                    ],
                    "type": "list",
                    "elements": "dict",
                    "suboptions": {
                        "sid": {
                            "description": "Statement ID",
                            "type": "str"
                        },
                        "resources": {
                            "description": [
                                "The bucket and any object it contains.",
                                "The wildcard characters * and ? can be used to form a regular expression for specifying a resource."
                            ],
                            "type": "list",
                            "elements": "str"
                        },
                        "actions": {
                            "description": [
                                "You can specify * to mean all actions, or a list of one or more of the following",
                                "GetObject",
                                "PutObject",
                                "DeleteObject",
                                "ListBucket",
                                "GetBucketAcl",
                                "GetObjectAcl",
                                "ListBucketMultipartUploads",
                                "ListMultipartUploadParts"
                            ],
                            "type": "list",
                            "elements": "str"
                        },
                        "effect": {
                            "description": "The statement may allow or deny access",
                            "type": "str",
                            "choices": [
                                "allow",
                                "deny"
                            ]
                        },
                        "principals": {
                            "description": "A list of one or more S3 users or groups.",
                            "type": "list",
                            "elements": "str"
                        },
                        "conditions": {
                            "description": "Conditions for when a policy is in effect.",
                            "type": "list",
                            "elements": "dict",
                            "suboptions": {
                                "operator": {
                                    "description": [
                                        "The operator to use for the condition."
                                    ],
                                    "type": "str",
                                    "choices": [
                                        "ip_address",
                                        "not_ip_address",
                                        "string_equals",
                                        "string_not_equals",
                                        "string_equals_ignore_case",
                                        "string_not_equals_ignore_case",
                                        "string_like",
                                        "string_not_like",
                                        "numeric_equals",
                                        "numeric_not_equals",
                                        "numeric_greater_than",
                                        "numeric_greater_than_equals",
                                        "numeric_less_than",
                                        "numeric_less_than_equals"
                                    ]
                                },
                                "max_keys": {
                                    "description": [
                                        "The maximum number of keys that can be returned in a request."
                                    ],
                                    "type": "list",
                                    "elements": "str"
                                },
                                "delimiters": {
                                    "description": [
                                        "The delimiter used to identify a prefix in a list of objects."
                                    ],
                                    "type": "list",
                                    "elements": "str"
                                },
                                "source_ips": {
                                    "description": [
                                        "The source IP address of the request."
                                    ],
                                    "type": "list",
                                    "elements": "str"
                                },
                                "prefixes": {
                                    "description": [
                                        "The prefixes of the objects that you want to list."
                                    ],
                                    "type": "list",
                                    "elements": "str"
                                },
                                "usernames": {
                                    "description": [
                                        "The user names that you want to allow to access the bucket."
                                    ],
                                    "type": "list",
                                    "elements": "str"
                                }
                            }
                        }
                    }
                }
            }
        },
        "qos_policy": {
            "description": [
                "A policy group defines measurable service level objectives (SLOs) that apply to the storage objects with which the policy group is associated.",
                "If you do not assign a policy group to a bucket, the system wil not monitor and control the traffic to it.",
                "This option is not supported when I(type=nas)."
            ],
            "type": "dict",
            "suboptions": {
                "max_throughput_iops": {
                    "description": "The maximum throughput in IOPS.",
                    "type": "int"
                },
                "max_throughput_mbps": {
                    "description": "The maximum throughput in MBPS.",
                    "type": "int"
                },
                "min_throughput_iops": {
                    "description": "The minimum throughput in IOPS.",
                    "type": "int"
                },
                "min_throughput_mbps": {
                    "description": "The minimum throughput in MBPS.",
                    "type": "int"
                },
                "name": {
                    "description": "The QoS policy group name. This is mutually exclusive with other QoS attributes.",
                    "type": "str"
                }
            }
        },
        "audit_event_selector": {
            "description": [
                "Audit event selector allows you to specify access and permission types to audit.",
                "This option is not supported when I(type=nas)."
            ],
            "type": "dict",
            "suboptions": {
                "access": {
                    "description": [
                        "specifies the type of event access to be audited, read-only, write-only or all (default is all)."
                    ],
                    "type": "str",
                    "choices": [
                        "read",
                        "write",
                        "all"
                    ]
                },
                "permission": {
                    "description": [
                        "specifies the type of event permission to be audited, allow-only, deny-only or all (default is all)."
                    ],
                    "type": "str",
                    "choices": [
                        "allow",
                        "deny",
                        "all"
                    ]
                }
            }
        }
    },
    "netapp.ontap.na_ontap_s3_groups": {
        "state": {
            "description": [
                "Whether the specified S3 group should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the S3 group."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "comment": {
            "description": [
                "comment about the group"
            ],
            "type": "str"
        },
        "users": {
            "description": "List of users to to add the the group",
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "name": {
                    "description": "username",
                    "type": "str"
                }
            }
        },
        "policies": {
            "description": "Policies to add the the group",
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "name": {
                    "description": "policy name",
                    "type": "str"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_s3_policies": {
        "state": {
            "description": [
                "Whether the specified S3 policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the S3 policy."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "comment": {
            "description": [
                "comment about the policy"
            ],
            "type": "str"
        },
        "statements": {
            "description": [
                "Policy statements are built using this structure to specify permissions",
                "Grant <Effect> to allow/deny <Principal> to perform <Action> on <Resource> when <Condition> applies"
            ],
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "sid": {
                    "description": "Statement ID",
                    "type": "str",
                    "required": true
                },
                "resources": {
                    "description": [
                        "The bucket and any object it contains.",
                        "The wildcard characters * and ? can be used to form a regular expression for specifying a resource."
                    ],
                    "type": "list",
                    "elements": "str",
                    "required": true
                },
                "actions": {
                    "description": [
                        "You can specify * to mean all actions, or a list of one or more of the following",
                        "GetObject",
                        "PutObject",
                        "DeleteObject",
                        "ListBucket",
                        "GetBucketAcl",
                        "GetObjectAcl",
                        "ListBucketMultipartUploads",
                        "ListMultipartUploadParts"
                    ],
                    "type": "list",
                    "elements": "str",
                    "required": true
                },
                "effect": {
                    "description": "The statement may allow or deny access",
                    "type": "str",
                    "choices": [
                        "allow",
                        "deny"
                    ],
                    "required": true
                }
            }
        }
    },
    "netapp.ontap.na_ontap_s3_services": {
        "state": {
            "description": [
                "Whether the specified S3 bucket should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the S3 service."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "enabled": {
            "description": [
                "enable or disable the service"
            ],
            "type": "bool"
        },
        "comment": {
            "description": [
                "comment about the service"
            ],
            "type": "str"
        },
        "is_http_enabled": {
            "description": [
                "Specifies whether HTTP is enabled on the S3 server being created or modified"
            ],
            "type": "bool",
            "default": false,
            "version_added": "22.13.0"
        },
        "is_https_enabled": {
            "description": [
                "Specifies whether HTTPS is enabled on the S3 server being created or modified"
            ],
            "type": "bool",
            "default": true,
            "version_added": "22.13.0"
        },
        "port": {
            "description": [
                "Specifies the HTTP listener port for the S3 server"
            ],
            "type": "int",
            "default": 80,
            "version_added": "22.13.0"
        },
        "secure_port": {
            "description": [
                "Specifies the HTTPS listener port for the S3 server"
            ],
            "type": "int",
            "default": 443,
            "version_added": "22.13.0"
        },
        "certificate_name": {
            "description": [
                "name of https certificate to use for the service"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_s3_users": {
        "state": {
            "description": [
                "Whether the specified S3 user should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the S3 user."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "comment": {
            "description": [
                "comment about the user"
            ],
            "type": "str"
        },
        "regenerate_keys": {
            "description": [
                "Specifies whether or not to regenerate the user keys."
            ],
            "type": "bool",
            "version_added": "22.13.0"
        },
        "delete_keys": {
            "description": [
                "Specifies whether or not to delete the user keys.",
                "Requires ONTAP 9.14 or later."
            ],
            "type": "bool",
            "version_added": "22.13.0"
        }
    },
    "netapp.ontap.na_ontap_security_certificates": {
        "state": {
            "description": [
                "Whether the specified security certificate should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "common_name": {
            "description": [
                "Common name of the certificate.",
                "Required for create and install.",
                "If name is present, ignored for sign and delete.",
                "If name is absent or ignored, required for sign and delete."
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "The unique name of the security certificate per SVM.",
                "This parameter is not supported for ONTAP 9.6 or 9.7, as the REST API does not support it.",
                "If present with ONTAP 9.6 or 9.7, it is ignored by default, see I(ignore_name_if_not_supported).",
                "It is strongly recommended to use name for newer releases of ONTAP."
            ],
            "type": "str"
        },
        "svm": {
            "description": [
                "The name of the SVM (vserver).",
                "If present, the certificate is installed in the SVM.",
                "If absent, the certificate is installed in the cluster."
            ],
            "type": "str",
            "aliases": [
                "vserver"
            ]
        },
        "type": {
            "description": [
                "Type of certificate",
                "Required for create and install.",
                "If name is present, ignored for sign and delete.",
                "If name is absent or ignored, required for sign and delete."
            ],
            "choices": [
                "client",
                "server",
                "client_ca",
                "server_ca",
                "root_ca"
            ],
            "type": "str"
        },
        "public_certificate": {
            "description": [
                "Public key certificate in PEM format.",
                "Required when installing a certificate.  Ignored otherwise."
            ],
            "type": "str"
        },
        "private_key": {
            "description": [
                "Private key certificate in PEM format.",
                "Required when installing a CA-signed certificate.  Ignored otherwise."
            ],
            "type": "str"
        },
        "signing_request": {
            "description": [
                "If present, the certificate identified by name and svm is used to sign the request.",
                "A signed certificate is returned."
            ],
            "type": "str"
        },
        "expiry_time": {
            "description": [
                "Certificate expiration time. Specifying an expiration time is recommended when creating a certificate.",
                "Can be provided when signing a certificate."
            ],
            "type": "str"
        },
        "key_size": {
            "description": [
                "Key size of the certificate in bits. Specifying a strong key size is recommended when creating a certificate.",
                "Ignored for sign and delete."
            ],
            "type": "int"
        },
        "hash_function": {
            "description": [
                "Hashing function. Can be provided when creating a self-signed certificate or when signing a certificate.",
                "Allowed values for create and sign are sha256, sha224, sha384, sha512."
            ],
            "type": "str"
        },
        "intermediate_certificates": {
            "description": [
                "Chain of intermediate Certificates in PEM format.",
                "Only valid when installing a certificate."
            ],
            "type": "list",
            "elements": "str"
        },
        "ignore_name_if_not_supported": {
            "description": [
                "ONTAP 9.6 and 9.7 REST API does not support I(name).",
                "If set to true, no error is reported if I(name) is present, and I(name) is not used."
            ],
            "type": "bool",
            "default": true,
            "version_added": "20.8.0"
        }
    },
    "netapp.ontap.na_ontap_security_config": {
        "name": {
            "description": [
                "The type of FIPS compliant interface."
            ],
            "type": "str",
            "default": "ssl"
        },
        "is_fips_enabled": {
            "description": [
                "Enables or disables FIPS-compliant mode for the cluster.",
                "For REST, it requires ontap version 9.8."
            ],
            "type": "bool"
        },
        "supported_ciphers": {
            "description": [
                "Selects the supported cipher suites for the selected interface.",
                "This option is supported only in ZAPI."
            ],
            "type": "str"
        },
        "supported_protocols": {
            "description": [
                "Selects the supported protocols for the selected interface. Supported_ciphers should not be specified if operating in FIPS-compliant mode.",
                "For REST, it requires ontap version 9.10.1 or later.",
                "Protocol versions can be removed only from lower versions.",
                "To remove protocol TLSv1 has to be removed first."
            ],
            "choices": [
                "TLSv1.3",
                "TLSv1.2",
                "TLSv1.1",
                "TLSv1"
            ],
            "type": "list",
            "elements": "str"
        },
        "supported_cipher_suites": {
            "description": [
                "Names a cipher suite that the system can select during TLS handshakes.",
                "A list of available options can be found on the Internet Assigned Number Authority (IANA) website.",
                "To achieve idempotency all similar cipher_suites must be set.",
                "This option requires ontap version 9.10.1 or later."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "22.4.0"
        }
    },
    "netapp.ontap.na_ontap_security_ipsec_ca_certificate": {
        "state": {
            "description": [
                "Create or delete security IPsec CA Certificate.",
                "The certificate must already be installed on the system, for instance using na_ontap_security_certificates."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Name of the CA certificate.",
                "Certificate must be already installed in svm or cluster scope."
            ],
            "type": "str",
            "required": true
        },
        "svm": {
            "description": [
                "Name of svm.",
                "If not set cluster scope is assumed."
            ],
            "type": "str",
            "required": false
        }
    },
    "netapp.ontap.na_ontap_security_ipsec_config": {
        "state": {
            "description": [
                "modify IPsec configuration, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "enabled": {
            "description": [
                "Indicates whether or not IPsec is enabled."
            ],
            "type": "bool",
            "required": false
        },
        "replay_window": {
            "description": [
                "Replay window size in packets, where 0 indicates that the relay window is disabled."
            ],
            "type": "str",
            "required": false,
            "choices": [
                "0",
                "64",
                "128",
                "256",
                "512",
                "1024"
            ]
        }
    },
    "netapp.ontap.na_ontap_security_ipsec_policy": {
        "state": {
            "description": [
                "Create or delete security IPsec policy."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Name of the security IPsec policy"
            ],
            "type": "str",
            "required": true
        },
        "action": {
            "description": [
                "Action for the IPsec policy.",
                "Cannot modify after create."
            ],
            "type": "str",
            "choices": [
                "bypass",
                "discard",
                "esp_transport",
                "esp_udp"
            ]
        },
        "authentication_method": {
            "description": [
                "Authentication method for the IPsec policy.",
                "Supported from 9.10.1 or later.",
                "Cannot modify after create."
            ],
            "type": "str",
            "choices": [
                "none",
                "psk",
                "pki"
            ]
        },
        "certificate": {
            "description": [
                "Certificate for the IPsec policy.",
                "Supported from 9.10.1 or later.",
                "Required when C(authentication_method) is 'pki' in create."
            ],
            "type": "str"
        },
        "enabled": {
            "description": [
                "Indicates whether or not the policy is enabled."
            ],
            "type": "bool"
        },
        "ipspace": {
            "description": [
                "IPspace name where C(svm) exist."
            ],
            "type": "str"
        },
        "local_endpoint": {
            "description": [
                "Local endpoint for the IPsec policy."
            ],
            "type": "dict",
            "suboptions": {
                "address": {
                    "description": [
                        "IPv4 or IPv6 address."
                    ],
                    "type": "str",
                    "required": true
                },
                "netmask": {
                    "description": [
                        "Input as netmask length (16) or IPv4 mask (255.255.0.0).",
                        "For IPv6, the default value is 64 with a valid range of 1 to 127."
                    ],
                    "type": "str",
                    "required": true
                },
                "port": {
                    "description": [
                        "Application port to be covered by the IPsec policy, example 23."
                    ],
                    "type": "str"
                }
            }
        },
        "remote_endpoint": {
            "description": [
                "remote endpoint for the IPsec policy."
            ],
            "type": "dict",
            "suboptions": {
                "address": {
                    "description": [
                        "IPv4 or IPv6 address."
                    ],
                    "type": "str",
                    "required": true
                },
                "netmask": {
                    "description": [
                        "Input as netmask length (16) or IPv4 mask (255.255.0.0).",
                        "For IPv6, the default value is 64 with a valid range of 1 to 127."
                    ],
                    "type": "str",
                    "required": true
                },
                "port": {
                    "description": [
                        "Application port to be covered by the IPsec policy, example 23 or 23-23."
                    ],
                    "type": "str"
                }
            }
        },
        "local_identity": {
            "description": [
                "local IKE endpoint's identity for authentication purpose."
            ],
            "type": "str"
        },
        "remote_identity": {
            "description": [
                "remote IKE endpoint's identity for authentication purpose."
            ],
            "type": "str"
        },
        "protocol": {
            "description": [
                "protocol to be protected by by this policy.",
                "example 'any' or '0', 'tcp', 'udp' or protocol number."
            ],
            "type": "str"
        },
        "secret_key": {
            "description": [
                "Pre-shared key for IKE negotiation.",
                "Required when C(authentication_method) is 'psk' in create.",
                "Cannot modify after create."
            ],
            "type": "str"
        },
        "svm": {
            "description": [
                "The name of the SVM.",
                "Required when creating security IPsec policy."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_security_key_manager": {
        "state": {
            "description": [
                "Whether the specified key manager should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "ip_address": {
            "description": [
                "The IP address of the external key management server.",
                "Mutually exclusive with external and onboard options.",
                "Required with ZAPI."
            ],
            "required": false,
            "type": "str"
        },
        "tcp_port": {
            "description": [
                "The TCP port on which the key management server listens for incoming connections."
            ],
            "default": 5696,
            "type": "int"
        },
        "node": {
            "description": [
                "The node which key management server runs on.",
                "Ignored, a warning is raised if present.",
                "Deprecated as of 21.22.0, as it was never used."
            ],
            "type": "str"
        },
        "external": {
            "description": [
                "Configures external key manager.",
                "Not supported with ZAPI.",
                "Mutually exclusive with ip_address and onboard."
            ],
            "type": "dict",
            "suboptions": {
                "client_certificate": {
                    "description": [
                        "Client certificate name (already installed in the cluster or SVM).",
                        "Required when creating an external key manager."
                    ],
                    "type": "str"
                },
                "server_ca_certificates": {
                    "description": [
                        "List of server CA certificate names (already installed in the cluster or SVM).",
                        "Required when creating an external key manager."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "servers": {
                    "description": [
                        "List of external key servers for key management.",
                        "Format - ip_address:port or FQDN:port.  port defaults to the value of C(tcp_port) when not provided.",
                        "The order in the list is not preserved if the key-manager already exists."
                    ],
                    "type": "list",
                    "elements": "str"
                }
            },
            "version_added": "21.23.0"
        },
        "onboard": {
            "description": [
                "Configures onboard key management.",
                "Not supported with ZAPI.",
                "Mutually exclusive with ip_address and external ."
            ],
            "type": "dict",
            "suboptions": {
                "from_passphrase": {
                    "description": [
                        "The cluster-wide passphrase.",
                        "Ignored if the onboard key manager does not already exists.",
                        "Required to change the passphrase."
                    ],
                    "type": "str"
                },
                "passphrase": {
                    "description": [
                        "The cluster-wide passphrase."
                    ],
                    "type": "str"
                },
                "synchronize": {
                    "description": [
                        "Synchronizes missing onboard keys on any node in the cluster."
                    ],
                    "type": "bool",
                    "default": false
                }
            },
            "version_added": "21.23.0"
        },
        "vserver": {
            "description": [
                "SVM name when using an external key manager.",
                "Not supported for onboard key manager.",
                "Not supported with ZAPI."
            ],
            "type": "str",
            "version_added": "21.23.0"
        }
    },
    "netapp.ontap.na_ontap_security_ssh": {
        "state": {
            "description": [
                "SSH service is always enabled."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "Name of the vserver to use for vserver scope.",
                "If absent or null, cluster scope is assumed."
            ],
            "type": "str"
        },
        "ciphers": {
            "description": [
                "Ciphers for encrypting the data.",
                "Example list [ aes256_ctr, aes192_ctr, aes128_ctr, aes256_cbc, aes192_cbc ]"
            ],
            "type": "list",
            "elements": "str"
        },
        "key_exchange_algorithms": {
            "description": [
                "Key exchange algorithms.",
                "Example list [ diffie_hellman_group_exchange_sha256, diffie_hellman_group14_sha1 ]"
            ],
            "type": "list",
            "elements": "str"
        },
        "mac_algorithms": {
            "description": [
                "MAC algorithms.",
                "Example list [ hmac_sha1, hmac_sha2_512_etm ]"
            ],
            "type": "list",
            "elements": "str"
        },
        "max_authentication_retry_count": {
            "description": [
                "Maximum authentication retries allowed before closing the connection.",
                "Minimum value is 2 and maximum is 6.",
                "Default value is 2."
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_service_policy": {
        "state": {
            "description": [
                "Whether the specified service policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the service policy."
            ],
            "required": true,
            "type": "str"
        },
        "ipspace": {
            "description": [
                "Name of the ipspace.",
                "Required for cluster-scoped service policies.",
                "Optional for SVM-scoped service policies."
            ],
            "type": "str"
        },
        "services": {
            "description": [
                "List of services to associate to this service policy.",
                "To remove all services, use \"no_service\".  No other value is allowed when no_service is present.",
                "Note - not all versions of ONTAP support all values, and new ones may be added.",
                "See C(known_services) and C(additional_services) to address unknow service errors."
            ],
            "type": "list",
            "elements": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "Omit this option for cluster scoped user accounts."
            ],
            "type": "str"
        },
        "scope": {
            "description": [
                "Set to \"svm\" for interfaces owned by an SVM. Otherwise, set to \"cluster\".",
                "svm is assumed if vserver is set.",
                "cluster is assumed is vserver is not set."
            ],
            "type": "str",
            "choices": [
                "cluster",
                "svm"
            ]
        },
        "known_services": {
            "description": [
                "List of known services in 9.12.1",
                "An error is raised if any service in C(services) is not in this list or C(new_services).",
                "Modify this list to restrict the services you want to support if needed."
            ],
            "default": [
                "cluster_core",
                "intercluster_core",
                "management_core",
                "management_autosupport",
                "management_bgp",
                "management_ems",
                "management_https",
                "management_http",
                "management_ssh",
                "management_portmap",
                "data_core",
                "data_nfs",
                "data_cifs",
                "data_flexcache",
                "data_iscsi",
                "data_s3_server",
                "data_dns_server",
                "data_fpolicy_client",
                "management_ntp_client",
                "management_dns_client",
                "management_ad_client",
                "management_ldap_client",
                "management_nis_client",
                "management_snmp_server",
                "management_rsh_server",
                "management_telnet_server",
                "management_ntp_server",
                "data_nvme_tcp",
                "backup_ndmp_control",
                "management_log_forwarding"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "22.0.0"
        },
        "additional_services": {
            "description": [
                "As an alternative to updating the C(known_services), new services can be specified here."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "22.0.0"
        }
    },
    "netapp.ontap.na_ontap_service_processor_network": {
        "state": {
            "description": [
                "Whether the specified service processor network should exist or not."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "address_type": {
            "description": [
                "Specify address class."
            ],
            "required": true,
            "type": "str",
            "choices": [
                "ipv4",
                "ipv6"
            ]
        },
        "is_enabled": {
            "description": [
                "Specify whether to enable or disable the service processor network.",
                "Required with ZAPI.",
                "Disable service processor network status not supported in REST.",
                "Setting C(ip_address), C(netmask) or C(prefix_length), C(gateway_ip_address) will enable sp network in REST."
            ],
            "type": "bool"
        },
        "node": {
            "description": [
                "The node where the service processor network should be enabled"
            ],
            "required": true,
            "type": "str"
        },
        "dhcp": {
            "description": [
                "Specify dhcp type.",
                "Setting C(dhcp=none) requires all of C(ip_address), C(netmask), C(gateway_ip_address) and at least one of its value different from current."
            ],
            "type": "str",
            "choices": [
                "v4",
                "none"
            ]
        },
        "gateway_ip_address": {
            "description": [
                "Specify the gateway ip."
            ],
            "type": "str"
        },
        "ip_address": {
            "description": [
                "Specify the service processor ip address."
            ],
            "type": "str"
        },
        "netmask": {
            "description": [
                "Specify the service processor netmask."
            ],
            "type": "str"
        },
        "prefix_length": {
            "description": [
                "Specify the service processor prefix_length."
            ],
            "type": "int"
        },
        "wait_for_completion": {
            "description": [
                "Set this parameter to 'true' for synchronous execution (wait until SP status is successfully updated)",
                "Set this parameter to 'false' for asynchronous execution",
                "For asynchronous, execution exits as soon as the request is sent, without checking SP status"
            ],
            "type": "bool",
            "default": false,
            "version_added": "2.8.0"
        }
    },
    "netapp.ontap.na_ontap_snaplock_clock": {
        "node": {
            "description": [
                "Name of the node to set compliance clock on."
            ],
            "type": "str",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_snapmirror": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified relationship should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "source_volume": {
            "description": [
                "Specifies the name of the source volume for the SnapMirror.",
                "Deprecated as of 21.2.0, use source_endpoint and path."
            ],
            "type": "str"
        },
        "destination_volume": {
            "description": [
                "Specifies the name of the destination volume for the SnapMirror.",
                "Deprecated as of 21.2.0, use source_endpoint and path."
            ],
            "type": "str"
        },
        "source_vserver": {
            "description": [
                "Name of the source vserver for the SnapMirror.",
                "Deprecated as of 21.2.0, use source_endpoint and path, or svm."
            ],
            "type": "str"
        },
        "destination_vserver": {
            "description": [
                "Name of the destination vserver for the SnapMirror.",
                "Deprecated as of 21.2.0, use destination_endpoint and path, or svm."
            ],
            "type": "str"
        },
        "source_path": {
            "description": [
                "Specifies the source endpoint of the SnapMirror relationship.",
                "If the source is an ONTAP volume, format should be <[vserver:][volume]> or <[[cluster:]//vserver/]volume>",
                "If the source is an ElementSW volume, format should be <[Element_SVIP]:/lun/[Element_VOLUME_ID]>",
                "If the source is an ElementSW volume, the volume should have SnapMirror enabled.",
                "Deprecated as of 21.2.0, use source_endpoint and path."
            ],
            "type": "str"
        },
        "destination_path": {
            "description": [
                "Specifies the destination endpoint of the SnapMirror relationship.",
                "Deprecated as of 21.2.0, use destination_endpoint and path."
            ],
            "type": "str"
        },
        "relationship_type": {
            "choices": [
                "data_protection",
                "load_sharing",
                "vault",
                "restore",
                "transition_data_protection",
                "extended_data_protection"
            ],
            "type": "str",
            "description": [
                "Specify the type of SnapMirror relationship.",
                "for 'restore' unless 'source_snapshot' is specified the most recent Snapshot copy on the source volume is restored.",
                "restore SnapMirror is not idempotent.",
                "With REST, only 'extended_data_protection' and 'restore' are supported."
            ]
        },
        "schedule": {
            "description": [
                "Specify the name of the current schedule, which is used to update the SnapMirror relationship.",
                "Optional for create, modifiable.",
                "With REST, this option requires ONTAP 9.11.1 or later."
            ],
            "type": "str",
            "aliases": [
                "transfer_schedule"
            ],
            "version_added": "22.2.0"
        },
        "policy": {
            "description": [
                "Specify the name of the SnapMirror policy that applies to this relationship."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "source_hostname": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Source hostname or management IP address for ONTAP or ElementSW cluster.",
                "If present, when state is absent, the relationship is released at the source before being deleted at destination.",
                "It is recommended to always release before deleting, so make sure this parameter is present if the source hostname is known."
            ],
            "type": "str"
        },
        "source_username": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Source username for ONTAP or ElementSW cluster.",
                "Optional if this is same as destination username."
            ],
            "type": "str"
        },
        "source_password": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Source password for ONTAP or ElementSW cluster.",
                "Optional if this is same as destination password."
            ],
            "type": "str"
        },
        "connection_type": {
            "description": [
                "Type of SnapMirror relationship.",
                "Pre-requisite for either elementsw_ontap or ontap_elementsw the ElementSW volume should have enableSnapmirror option set to true.",
                "For using ontap_elementsw, elementsw_ontap snapmirror relationship should exist."
            ],
            "choices": [
                "ontap_ontap",
                "elementsw_ontap",
                "ontap_elementsw"
            ],
            "default": "ontap_ontap",
            "type": "str",
            "version_added": "2.9.0"
        },
        "max_transfer_rate": {
            "description": [
                "Specifies the upper bound, in kilobytes per second, at which data is transferred.",
                "Default is unlimited, it can be explicitly set to 0 as unlimited."
            ],
            "type": "int",
            "version_added": "2.9.0"
        },
        "initialize": {
            "description": [
                "Specifies whether to initialize SnapMirror relation.",
                "Default is True, it can be explicitly set to False to avoid initializing SnapMirror relation."
            ],
            "default": true,
            "type": "bool",
            "version_added": "19.11.0"
        },
        "update": {
            "description": [
                "Specifies whether to update the destination endpoint of the SnapMirror relationship only if the relationship is already present and active.",
                "Default is True."
            ],
            "default": true,
            "type": "bool",
            "version_added": "20.2.0"
        },
        "relationship_info_only": {
            "description": [
                "If relationship-info-only is set to true then only relationship information is removed."
            ],
            "default": false,
            "type": "bool",
            "version_added": "20.4.0"
        },
        "relationship_state": {
            "description": [
                "Specifies whether to break SnapMirror relation or establish a SnapMirror relationship.",
                "state must be present to use this option."
            ],
            "default": "active",
            "choices": [
                "active",
                "broken"
            ],
            "type": "str",
            "version_added": "20.2.0"
        },
        "source_snapshot": {
            "description": [
                "Specifies the Snapshot from the source to be restored."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "identity_preserve": {
            "description": [
                "Specifies whether or not the identity of the source Vserver is replicated to the destination Vserver.",
                "If this parameter is set to true, the source Vserver's configuration will additionally be replicated to the destination.",
                "If the parameter is set to false, then only the source Vserver's volumes and RBAC configuration are replicated to the destination."
            ],
            "type": "bool",
            "version_added": "2.9.0"
        },
        "create_destination": {
            "description": [
                "Requires ONTAP 9.7 or later.",
                "Creates the destination volume if enabled and destination_volume is present or destination_path includes a volume name.",
                "Creates and peers the destination vserver for SVM DR."
            ],
            "type": "dict",
            "version_added": "21.1.0",
            "suboptions": {
                "enabled": {
                    "description": [
                        "Whether to create the destination volume or vserver.",
                        "This is automatically enabled if any other suboption is present."
                    ],
                    "type": "bool",
                    "default": true
                },
                "storage_service": {
                    "description": "storage service associated with the destination endpoint.",
                    "type": "dict",
                    "suboptions": {
                        "enabled": {
                            "description": "whether to create the destination endpoint using storage service.",
                            "type": "bool"
                        },
                        "enforce_performance": {
                            "description": "whether to enforce storage service performance on the destination endpoint.",
                            "type": "bool"
                        },
                        "name": {
                            "description": "the performance service level (PSL) for this volume endpoint.",
                            "type": "str",
                            "choices": [
                                "value",
                                "performance",
                                "extreme"
                            ]
                        }
                    }
                },
                "tiering": {
                    "description": [
                        "Cloud tiering policy."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "policy": {
                            "description": [
                                "Cloud tiering policy."
                            ],
                            "choices": [
                                "all",
                                "auto",
                                "none",
                                "snapshot-only"
                            ],
                            "type": "str"
                        },
                        "supported": {
                            "description": [
                                "enable provisioning of the destination endpoint volumes on FabricPool aggregates.",
                                "only supported for FlexVol volume, FlexGroup volume, and Consistency Group endpoints."
                            ],
                            "type": "bool"
                        }
                    }
                }
            }
        },
        "destination_cluster": {
            "description": [
                "Requires ONTAP 9.7 or higher.",
                "Required to create the destination vserver for SVM DR or the destination volume.",
                "Deprecated as of 21.2.0, use destination_endpoint and cluster."
            ],
            "type": "str",
            "version_added": "21.1.0"
        },
        "source_cluster": {
            "description": [
                "Requires ONTAP 9.7 or higher.",
                "Required to create the peering relationship between source and destination SVMs.",
                "Deprecated as of 21.2.0, use source_endpoint and cluster."
            ],
            "type": "str",
            "version_added": "21.1.0"
        },
        "source_endpoint": {
            "description": [
                "source endpoint of a SnapMirror relationship."
            ],
            "type": "dict",
            "version_added": "21.2.0",
            "suboptions": {
                "cluster": {
                    "description": [
                        "Requires ONTAP 9.7 or higher.",
                        "Required to create the peering relationship between source and destination SVMs."
                    ],
                    "type": "str"
                },
                "consistency_group_volumes": {
                    "description": [
                        "Requires ONTAP 9.8 or higher.",
                        "Mandatory property for a Consistency Group endpoint. Specifies the list of FlexVol volumes for a Consistency Group."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "ipspace": {
                    "description": [
                        "Requires ONTAP 9.8 or higher.",
                        "Optional property to specify the IPSpace of the SVM."
                    ],
                    "type": "str"
                },
                "path": {
                    "description": [
                        "The source endpoint for the relationship.",
                        "If the source is an ONTAP volume (FlexVol or FlexGroup), format should be <vserver:volume>",
                        "For SVM DR, format should be <vserver:>",
                        "For a consistency group, format should be <vserver:/cg/cg_name>",
                        "If the source is an ElementSW volume, format should be <Element_SVIP:/lun/Element_VOLUME_ID>",
                        "If the source is an ElementSW volume, the volume should have SnapMirror enabled."
                    ],
                    "type": "str",
                    "required": true
                },
                "svm": {
                    "description": [
                        "The name of the SVM.  Not sure when this is needed."
                    ],
                    "type": "str"
                }
            }
        },
        "destination_endpoint": {
            "description": [
                "destination endpoint of a SnapMirror relationship."
            ],
            "type": "dict",
            "version_added": "21.2.0",
            "suboptions": {
                "cluster": {
                    "description": [
                        "Requires ONTAP 9.7 or higher.",
                        "Required to create the destination vserver for SVM DR or the destination volume."
                    ],
                    "type": "str"
                },
                "consistency_group_volumes": {
                    "description": [
                        "Requires ONTAP 9.8 or higher.",
                        "Mandatory property for a Consistency Group endpoint. Specifies the list of FlexVol volumes for a Consistency Group."
                    ],
                    "type": "list",
                    "elements": "str"
                },
                "ipspace": {
                    "description": [
                        "Requires ONTAP 9.8 or higher.",
                        "Optional property to specify the IPSpace of the SVM."
                    ],
                    "type": "str"
                },
                "path": {
                    "description": [
                        "The destination endpoint for the relationship.",
                        "format is <vserver:volume>, <vserver:>, <vserver:/cg/cg_name>"
                    ],
                    "type": "str",
                    "required": true
                },
                "svm": {
                    "description": [
                        "The name of the SVM.  Not sure when this is needed."
                    ],
                    "type": "str"
                }
            }
        },
        "transferring_time_out": {
            "description": [
                "How long to wait when a transfer is in progress (after initializing for instance).  Unit is seconds."
            ],
            "default": 300,
            "type": "int",
            "version_added": "21.20.0"
        },
        "quiesced_time_out": {
            "description": [
                "How long to wait for a relationship to quiesce. Unit is seconds."
            ],
            "default": 300,
            "type": "int",
            "version_added": "22.14.0"
        },
        "clean_up_failure": {
            "description": [
                "An optional parameter to recover from an aborted or failed restore operation.",
                "Any temporary RST relationship is removed from the destination Vserver.",
                "Only supported with ZAPI."
            ],
            "default": false,
            "type": "bool",
            "version_added": "21.20.0"
        },
        "validate_source_path": {
            "description": [
                "The relationship is found based on the destination as it is unique.",
                "By default, the source information is verified and an error is reported if there is a mismatch. This would mean the destination is already used by another relationship.",
                "The check accounts for a local vserver name that may be different from the remote vserver name.",
                "This may be disabled in case the check is too strict, to unconditionally delete a realtionship for instance."
            ],
            "default": true,
            "type": "bool",
            "version_added": "21.21.0"
        },
        "identity_preservation": {
            "description": [
                "Specifies which configuration of the source SVM is replicated to the destination SVM.",
                "This property is applicable only for SVM data protection with \"async\" policy type.",
                "Only supported with REST and requires ONTAP 9.11.1 or later."
            ],
            "type": "str",
            "choices": [
                "full",
                "exclude_network_config",
                "exclude_network_and_protocol_config"
            ],
            "version_added": "22.4.0"
        }
    },
    "netapp.ontap.na_ontap_snapmirror_policy": {
        "state": {
            "description": [
                "Whether the specified SnapMirror policy should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the SnapMirror policy.",
                "Required with ZAPI.",
                "Name of a data vserver with REST.",
                "With current versions of ONTAP, when using REST, this must be set to the cluster name for cluster scoped policies (9.12.1 and older).",
                "Current versions of ONTAP fail with \"svm.uuid\" is required when the vserver field is not set.",
                "With newer versions of ONTAP, omit the value, or omit this option for a cluster scoped policy with REST."
            ],
            "type": "str"
        },
        "policy_name": {
            "description": [
                "Specifies the SnapMirror policy name.",
                "C(name) added as an alias in 22.0.0."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "name"
            ],
            "version_added": "22.0.0"
        },
        "policy_type": {
            "description": [
                "Specifies the SnapMirror policy type. Modifying the type of an existing SnapMirror policy is not supported.",
                "The Policy types 'sync' and 'async' are only supported in REST."
            ],
            "choices": [
                "vault",
                "async_mirror",
                "mirror_vault",
                "strict_sync_mirror",
                "sync_mirror",
                "sync",
                "async"
            ],
            "type": "str"
        },
        "comment": {
            "description": [
                "Specifies the SnapMirror policy comment."
            ],
            "type": "str"
        },
        "tries": {
            "description": [
                "Specifies the number of tries.",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "transfer_priority": {
            "description": [
                "Specifies the priority at which a SnapMirror transfer runs.",
                "Not supported with REST."
            ],
            "choices": [
                "low",
                "normal"
            ],
            "type": "str"
        },
        "transfer_schedule": {
            "description": [
                "Specifies the name of the schedule used to update asynchronous SnapMirror relationships.",
                "Not supported with ZAPI."
            ],
            "type": "str",
            "version_added": "22.2.0"
        },
        "common_snapshot_schedule": {
            "description": [
                "Specifies the common Snapshot copy schedule associated with the policy, only required for strict_sync_mirror and sync_mirror.",
                "Not supported with REST."
            ],
            "type": "str"
        },
        "owner": {
            "description": [
                "Specifies the owner of the SnapMirror policy.",
                "Not supported with REST."
            ],
            "choices": [
                "cluster_admin",
                "vserver_admin"
            ],
            "type": "str"
        },
        "is_network_compression_enabled": {
            "description": [
                "Specifies whether network compression is enabled for transfers."
            ],
            "type": "bool"
        },
        "ignore_atime": {
            "description": [
                "Specifies whether incremental transfers will ignore files which have only their access time changed. Applies to SnapMirror vault relationships only.",
                "Not supported with REST."
            ],
            "type": "bool"
        },
        "restart": {
            "description": [
                "Defines the behavior of SnapMirror if an interrupted transfer exists, applies to data protection only.",
                "Not supported with REST."
            ],
            "choices": [
                "always",
                "never",
                "default"
            ],
            "type": "str"
        },
        "snapmirror_label": {
            "description": [
                "SnapMirror policy rule label.",
                "Required when defining policy rules.",
                "Use an empty list to remove all user-defined rules."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "20.7.0"
        },
        "keep": {
            "description": [
                "SnapMirror policy rule retention count for snapshots created.",
                "Required when defining policy rules."
            ],
            "type": "list",
            "elements": "int",
            "version_added": "20.7.0"
        },
        "prefix": {
            "description": [
                "SnapMirror policy rule prefix.",
                "Optional when defining policy rules.",
                "Set to '' to not set or remove an existing custom prefix.",
                "Prefix name should be unique within the policy.",
                "When specifying a custom prefix, schedule must also be specified."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "20.7.0"
        },
        "schedule": {
            "description": [
                "SnapMirror policy rule schedule.",
                "Optional when defining policy rules.",
                "Set to '' to not set or remove a schedule.",
                "When specifying a schedule a custom prefix can be set otherwise the prefix will be set to snapmirror_label."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "20.7.0"
        },
        "identity_preservation": {
            "description": [
                "Specifies which configuration of the source SVM is replicated to the destination SVM.",
                "This property is applicable only for SVM data protection with \"async\" policy type.",
                "Only supported with REST."
            ],
            "type": "str",
            "choices": [
                "full",
                "exclude_network_config",
                "exclude_network_and_protocol_config"
            ],
            "version_added": "22.0.0"
        },
        "copy_all_source_snapshots": {
            "description": [
                "Specifies whether all source Snapshot copies should be copied to the destination on a transfer rather than specifying specific retentions.",
                "This property is applicable only to async policies.",
                "Property can only be set to 'true'.",
                "Only supported with REST and requires ONTAP 9.10.1 or later."
            ],
            "type": "bool",
            "version_added": "22.1.0"
        },
        "copy_latest_source_snapshot": {
            "description": [
                "Specifies that the latest source Snapshot copy (created by SnapMirror before the transfer begins) should be copied to the destination on a transfer.",
                "Retention properties cannot be specified along with this property.",
                "Property can only be set to 'true'.",
                "Only supported with REST and requires ONTAP 9.11.1 or later."
            ],
            "type": "bool",
            "version_added": "22.2.0"
        },
        "create_snapshot_on_source": {
            "description": [
                "Specifies whether a new Snapshot copy should be created on the source at the beginning of an update or resync operation.",
                "This property is applicable only to async policies.",
                "Property can only be set to 'false'.",
                "Only supported with REST and requires ONTAP 9.11.1 or later."
            ],
            "type": "bool",
            "version_added": "22.2.0"
        },
        "sync_type": {
            "description": [
                "This property is only applicable to sync policy types.",
                "If the \"sync_type\" is \"sync\" then a write success is returned to the client after writing the data to the primary endpoint and before writing the data to the secondary endpoint.",
                "If the \"sync_type\" is \"strict_sync\" then a write success is returned to the client after writing the data to the both primary and secondary endpoints.",
                "The \"sync_type\" of \"automated_failover\" can be associated with a SnapMirror relationship that has Consistency Group as the endpoint and it requires ONTAP 9.7 or later.",
                "Only supported with REST."
            ],
            "type": "str",
            "choices": [
                "sync",
                "strict_sync",
                "automated_failover"
            ],
            "version_added": "22.2.0"
        }
    },
    "netapp.ontap.na_ontap_snapshot": {
        "state": {
            "description": [
                "If you want to create/modify a snapshot, or delete it."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "snapshot": {
            "description": [
                "Name of the snapshot to be managed.",
                "The maximum string length is 256 characters."
            ],
            "required": true,
            "type": "str"
        },
        "from_name": {
            "description": [
                "Name of the existing snapshot to be renamed to."
            ],
            "version_added": "2.8.0",
            "type": "str"
        },
        "volume": {
            "description": [
                "Name of the volume on which the snapshot is to be created."
            ],
            "required": true,
            "type": "str"
        },
        "async_bool": {
            "description": [
                "If true, the snapshot is to be created asynchronously."
            ],
            "type": "bool"
        },
        "comment": {
            "description": [
                "A human readable comment attached with the snapshot.",
                "The size of the comment can be at most 255 characters."
            ],
            "type": "str"
        },
        "snapmirror_label": {
            "description": [
                "A human readable SnapMirror Label attached with the snapshot.",
                "Size of the label can be at most 31 characters.",
                "Supported with REST on Ontap 9.7 or higher."
            ],
            "type": "str"
        },
        "ignore_owners": {
            "description": [
                "if this field is true, snapshot will be deleted even if some other processes are accessing it."
            ],
            "type": "bool"
        },
        "snapshot_instance_uuid": {
            "description": [
                "The 128 bit unique snapshot identifier expressed in the form of UUID."
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The Vserver name"
            ],
            "required": true,
            "type": "str"
        },
        "expiry_time": {
            "description": [
                "Snapshot expire time, only available with REST.",
                "format should be in the timezone configured with cluster."
            ],
            "type": "str",
            "version_added": "21.8.0"
        }
    },
    "netapp.ontap.na_ontap_snapshot_policy": {
        "state": {
            "description": [
                "If you want to create, modify or delete a snapshot policy."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": "Name of the snapshot policy to be managed. The maximum string length is 256 characters.",
            "required": true,
            "type": "str"
        },
        "enabled": {
            "description": [
                "Status of the snapshot policy indicating whether the policy will be enabled or disabled."
            ],
            "type": "bool"
        },
        "comment": {
            "description": "A human readable comment attached with the snapshot. The size of the comment can be at most 255 characters.",
            "type": "str"
        },
        "count": {
            "description": "Retention count for the snapshots created by the schedule.",
            "type": "list",
            "elements": "int"
        },
        "schedule": {
            "description": [
                "Schedule to be added inside the policy."
            ],
            "type": "list",
            "elements": "str"
        },
        "prefix": {
            "description": [
                "Snapshot name prefix for the schedule.",
                "Prefix name should be unique within the policy.",
                "Cannot set a different prefix to a schedule that has already been assigned to a snapshot policy.",
                "Prefix cannot be modifed after schedule has been added."
            ],
            "type": "list",
            "elements": "str",
            "required": false,
            "version_added": "19.11.0"
        },
        "snapmirror_label": {
            "description": [
                "SnapMirror label assigned to each schedule inside the policy. Use an empty string ('') for no label."
            ],
            "type": "list",
            "elements": "str",
            "required": false,
            "version_added": "2.9.0"
        },
        "retention_period": {
            "description": [
                "The retention period of Snapshot copies for the schedule.",
                "Valid values are \"infinite\" or the duration specified in ISO 8601 format.",
                "The value when specified in ISO 8061 format for retention period must be in seconds (PT0S - PT65535S), minutes (PT0M - PT60M), hours (PT0H - PT24H), days (P0D - P36500D), months (P0M - P1200M), years (P0Y - P100Y).",
                "Supported only with REST and requires ONTAP 9.12 or later."
            ],
            "type": "list",
            "elements": "str",
            "required": false,
            "version_added": "22.12.0"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use. In a multi-tenanted environment, assigning a Snapshot Policy to a vserver will restrict its use to that vserver."
            ],
            "required": false,
            "type": "str",
            "version_added": "2.9.0"
        }
    },
    "netapp.ontap.na_ontap_snmp": {
        "access_control": {
            "choices": [
                "ro"
            ],
            "description": [
                "Access control for the community. The only supported value is 'ro' (read-only).",
                "Ignored with REST."
            ],
            "default": "ro",
            "type": "str"
        },
        "snmp_username": {
            "description": [
                "The name of the SNMP user to manage."
            ],
            "required": true,
            "type": "str",
            "version_added": "22.8.0"
        },
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified SNMP user should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "authentication_method": {
            "choices": [
                "community",
                "usm",
                "both"
            ],
            "description": [
                "Authentication method for SNMP user.",
                "Only supported with REST. The default value is community."
            ],
            "type": "str",
            "version_added": "22.8.0"
        },
        "snmpv3": {
            "description": [
                "Specify only when C(authentication_method) is either C(usm) or C(both).",
                "This option defines the SNMPv3 credentials for an SNMPv3 user or also called usm user.",
                "Only supported with REST."
            ],
            "type": "dict",
            "version_added": "22.8.0",
            "suboptions": {
                "authentication_password": {
                    "description": [
                        "Authentication protocol password."
                    ],
                    "type": "str",
                    "required": true
                },
                "authentication_protocol": {
                    "choices": [
                        "none",
                        "md5",
                        "sha",
                        "sha2_256"
                    ],
                    "description": [
                        "Authentication protocol for SNMPv3."
                    ],
                    "default": "none",
                    "type": "str"
                },
                "privacy_password": {
                    "description": [
                        "Privacy protocol password."
                    ],
                    "type": "str",
                    "required": true
                },
                "privacy_protocol": {
                    "choices": [
                        "none",
                        "des",
                        "aes128"
                    ],
                    "description": [
                        "Privacy protocol for SNMPv3."
                    ],
                    "default": "none",
                    "type": "str"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_snmp_config": {
        "state": {
            "description": [
                "Modify SNMP configuration, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "enabled": {
            "description": [
                "Specifies whether to enable or disable SNMP."
            ],
            "type": "bool",
            "required": false
        },
        "auth_traps_enabled": {
            "description": [
                "Specifies whether to enable or disable SNMP authentication traps."
            ],
            "type": "bool",
            "required": false
        },
        "traps_enabled": {
            "description": [
                "Specifies whether to enable or disable SNMP traps.",
                "Requires ONTAP 9.10.1 or later."
            ],
            "type": "bool",
            "required": false
        }
    },
    "netapp.ontap.na_ontap_snmp_traphosts": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "Whether the specified SNMP traphost should exist or not."
            ],
            "default": "present",
            "type": "str"
        },
        "host": {
            "description": [
                "Fully qualified domain name (FQDN), IPv4 address or IPv6 address of SNMP traphost."
            ],
            "aliases": [
                "ip_address"
            ],
            "required": true,
            "type": "str",
            "version_added": "21.24.0"
        }
    },
    "netapp.ontap.na_ontap_software_update": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "description": [
                "This module downloads and optionally installs ONTAP software on a cluster.",
                "The software package is deleted after a successful installation.",
                "If the software package is already present, it is not downloaded and not replaced.",
                "When state is absent, the package is deleted from disk."
            ],
            "default": "present",
            "type": "str"
        },
        "https": {
            "description": [
                "Enable and disable https."
            ],
            "type": "bool",
            "default": true
        },
        "nodes": {
            "description": [
                "List of nodes to be updated, the nodes have to be a part of a HA Pair.",
                "Requires ONTAP 9.9 with REST."
            ],
            "aliases": [
                "node",
                "nodes_to_update"
            ],
            "type": "list",
            "elements": "str"
        },
        "package_version": {
            "required": true,
            "description": [
                "Specifies the package version to update ONTAP software to, or to be deleted."
            ],
            "type": "str"
        },
        "package_url": {
            "type": "str",
            "description": [
                "Specifies the package URL to download the package.",
                "Required when state is present unless the package is already present on disk."
            ]
        },
        "ignore_validation_warning": {
            "description": [
                "Allows the update to continue if warnings are encountered during the validation phase."
            ],
            "default": false,
            "type": "bool",
            "aliases": [
                "skip_warnings"
            ]
        },
        "download_only": {
            "description": [
                "Allows to download image without update."
            ],
            "default": false,
            "type": "bool",
            "version_added": "20.4.0"
        },
        "validate_after_download": {
            "description": [
                "By default validation is not run after download, as it is already done in the update step.",
                "This option is useful when using C(download_only), for instance when updating a MetroCluster system."
            ],
            "default": false,
            "type": "bool",
            "version_added": "21.11.0"
        },
        "stabilize_minutes": {
            "description": [
                "Number of minutes that the update should wait after a takeover or giveback is completed.",
                "Requires ONTAP 9.8 with REST."
            ],
            "type": "int",
            "version_added": "20.6.0"
        },
        "timeout": {
            "description": [
                "how long to wait for the update to complete, in seconds."
            ],
            "default": 1800,
            "type": "int"
        },
        "force_update": {
            "description": [
                "force an update, even if package_version matches what is reported as installed."
            ],
            "default": false,
            "type": "bool",
            "version_added": "20.11.0"
        }
    },
    "netapp.ontap.na_ontap_ssh_command": {
        "command": {
            "description": [
                "a string containing the command and arguments."
            ],
            "required": true,
            "type": "str"
        },
        "privilege": {
            "description": [
                "privilege level at which to run the command, eg admin, advanced.",
                "if set, the command is prefixed with C(set -privilege <privilege>;)."
            ],
            "type": "str"
        },
        "accept_unknown_host_keys": {
            "description": [
                "When false, reject the connection if the host key is not in known_hosts file.",
                "When true, if the host key is unknown, accept it, but report a warning.",
                "Note that the key is not added to the file.  You could add the key by manually using SSH."
            ],
            "type": "bool",
            "default": false
        },
        "include_lines": {
            "description": [
                "return only lines containing string pattern in C(stdout_lines_filtered)"
            ],
            "default": "",
            "type": "str"
        },
        "exclude_lines": {
            "description": [
                "return only lines containing string pattern in C(stdout_lines_filtered)"
            ],
            "default": "",
            "type": "str"
        },
        "service_processor": {
            "description": [
                "whether the target system is ONTAP or the service processor (SP)",
                "only menaningful when privilege is set"
            ],
            "aliases": [
                "sp"
            ],
            "default": false,
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_storage_auto_giveback": {
        "name": {
            "description": [
                "Specifies the node name to enable or disable storage auto giveback on."
            ],
            "required": true,
            "type": "str"
        },
        "auto_giveback_enabled": {
            "description": [
                "specifies whether auto give back should be enabled or disabled"
            ],
            "required": true,
            "type": "bool"
        },
        "auto_giveback_after_panic_enabled": {
            "description": [
                "specifies whether auto give back on panic should be enabled or disabled"
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_storage_failover": {
        "state": {
            "description": [
                "Whether storage failover should be enabled (present) or disabled (absent)."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "node_name": {
            "description": [
                "Specifies the node name to enable or disable storage failover."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_storage_unit": {
        "state": {
            "description": [
                "Manage storage unit operations, only present is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specifies the name of the storage unit (LUN or NVMe namespace)."
            ],
            "type": "str",
            "required": true
        },
        "clone": {
            "type": "dict",
            "description": [
                "Identifiers of the parent storage unit or storage unit snapshot from which to clone a new storage unit.",
                "The storage unit clone and its source must reside on the same SVM."
            ],
            "suboptions": {
                "snapshot": {
                    "description": [
                        "The name of the snapshot the source storage unit resides in."
                    ],
                    "type": "str"
                },
                "storage_unit": {
                    "description": [
                        "The name of the source storage unit."
                    ],
                    "type": "str"
                }
            }
        },
        "split_initiated": {
            "description": [
                "Setting this field initiates a split of a FlexClone storage unit from a FlexVol storage unit.",
                "This operation stops the replication of data but doesn't remove the snapshots from the replicas."
            ],
            "type": "bool"
        },
        "vserver": {
            "description": [
                "Specifies the SVM in which the storage unit is located."
            ],
            "type": "str",
            "required": true
        },
        "restore_to_snapshot": {
            "description": [
                "Specifies the name of the snapshot to restore the storage unit to the point in time the snapshot was taken."
            ],
            "type": "str"
        },
        "target_location": {
            "description": [
                "Specifies the name of the destination storage availability zone for moving the storage unit."
            ],
            "type": "str"
        },
        "restore_to": {
            "description": [
                "Specifies the name of the snapshot to restore the storage unit to the point in time the snapshot was taken."
            ],
            "type": "str"
        },
        "time_out": {
            "description": [
                "With C(wait_for_completion) set, specifies time to wait for any storage unit clone, split, restore or move operations in seconds."
            ],
            "type": "int",
            "default": 180
        },
        "wait_for_completion": {
            "description": [
                "Set this parameter to 'true' for synchronous execution.",
                "For asynchronous, execution exits as soon as the request is sent, and the operation continues in the background."
            ],
            "type": "bool",
            "default": true
        }
    },
    "netapp.ontap.na_ontap_storage_unit_snapshot": {
        "state": {
            "description": [
                "Specifies whether the specified storage unit should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specifies the name of the snapshot."
            ],
            "type": "str",
            "required": true
        },
        "from_name": {
            "description": [
                "Specifies the name of the snapshot to be renamed."
            ],
            "type": "str"
        },
        "expiry_time": {
            "description": [
                "Specifies the expiry time for the snapshot. Example, 2025-04-09T07:30:00-04:00.",
                "Snapshots with an expiry time set are not allowed to be deleted until the retention time is reached."
            ],
            "type": "str"
        },
        "snapmirror_label": {
            "description": [
                "Specifies label for SnapMirror operations."
            ],
            "type": "str"
        },
        "storage_unit": {
            "description": [
                "Specifies the storage unit in which the snapshot is located."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Specifies the SVM in which the storage unit is located."
            ],
            "type": "str",
            "required": true
        },
        "comment": {
            "description": [
                "A comment associated with the snapshot."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_support_config_backup": {
        "state": {
            "description": [
                "This module supports only system backup configuration modify, hence only present state is supported."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "url": {
            "description": [
                "An external backup location for the cluster configuration.",
                "This is mostly required for single node clusters where node and cluster configuration backups cannot be copied to other nodes in the cluster."
            ],
            "type": "str"
        },
        "validate_certificate": {
            "description": [
                "Use this parameter with the value \"true\" to validate the digital certificate of the remote server.",
                "Digital certificate validation is available only when the HTTPS protocol is used in the URL; it is disabled by default."
            ],
            "type": "bool"
        },
        "name": {
            "description": [
                "Use this parameter to specify the user name to use to log in to the destination system and perform the upload.",
                "The option \"name\" should be used in parameter instead of \"username\"."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_svm": {
        "state": {
            "description": [
                "Whether the specified SVM should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the SVM to manage.",
                "vserver is a convenient alias when using module_defaults."
            ],
            "type": "str",
            "required": true,
            "aliases": [
                "vserver"
            ]
        },
        "from_name": {
            "description": [
                "Name of the SVM to be renamed"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "admin_state": {
            "description": [
                "when the SVM is created, it will be in the running state, unless specified otherwise.",
                "This is ignored with ZAPI."
            ],
            "choices": [
                "running",
                "stopped"
            ],
            "type": "str",
            "version_added": "21.15.0"
        },
        "root_volume": {
            "description": [
                "Root volume of the SVM.",
                "Cannot be modified after creation."
            ],
            "type": "str"
        },
        "root_volume_aggregate": {
            "description": [
                "The aggregate on which the root volume will be created.",
                "Cannot be modified after creation."
            ],
            "type": "str"
        },
        "root_volume_security_style": {
            "description": [
                "Security Style of the root volume.",
                "When specified as part of the vserver-create, this field represents the security style for the Vserver root volume.",
                "When specified as part of vserver-get-iter call, this will return the list of matching Vservers.",
                "The 'unified' security style, which applies only to Infinite Volumes, cannot be applied to a Vserver's root volume.",
                "Cannot be modified after creation."
            ],
            "choices": [
                "unix",
                "ntfs",
                "mixed",
                "unified"
            ],
            "type": "str"
        },
        "allowed_protocols": {
            "description": [
                "This field represents the list of protocols allowed on the Vserver.",
                "When part of modify, this field should include the existing list along with new protocol list to be added to prevent data disruptions.",
                "Mutually exclusive with C(services).",
                "Possible values",
                "nfs   NFS protocol,",
                "cifs  CIFS protocol,",
                "fcp   FCP protocol,",
                "iscsi iSCSI protocol,",
                "ndmp  NDMP protocol,",
                "s3  S3 protocol,",
                "http  HTTP protocol - ZAPI only,",
                "nvme  NVMe protocol"
            ],
            "type": "list",
            "elements": "str"
        },
        "services": {
            "description": [
                "Enabled Protocols, only available with REST.",
                "The service will be started if needed.  A valid license may be required.",
                "C(enabled) is not supported for CIFS, to enable it use na_ontap_cifs_server.",
                "C(enabled) is not supported for s3, to enable it use na_ontap_s3_services.",
                "If a service is not present, it is left unchanged.",
                "Mutually exclusive with C(allowed_protocols)."
            ],
            "type": "dict",
            "version_added": "21.10.0",
            "suboptions": {
                "cifs": {
                    "description": [
                        "CIFS protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": "If true, an SVM administrator can manage the CIFS service. If false, only the cluster administrator can manage the service.",
                            "type": "bool"
                        }
                    }
                },
                "iscsi": {
                    "description": [
                        "iSCSI protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": "If true, an SVM administrator can manage the iSCSI service. If false, only the cluster administrator can manage the service.",
                            "type": "bool"
                        },
                        "enabled": {
                            "description": "If allowed, setting to true enables the iSCSI service.",
                            "type": "bool"
                        }
                    }
                },
                "fcp": {
                    "description": [
                        "FCP protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": "If true, an SVM administrator can manage the FCP service. If false, only the cluster administrator can manage the service.",
                            "type": "bool"
                        },
                        "enabled": {
                            "description": "If allowed, setting to true enables the FCP service.",
                            "type": "bool"
                        }
                    }
                },
                "nfs": {
                    "description": [
                        "NFS protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": "If true, an SVM administrator can manage the NFS service. If false, only the cluster administrator can manage the service.",
                            "type": "bool"
                        },
                        "enabled": {
                            "description": "If allowed, setting to true enables the NFS service.",
                            "type": "bool"
                        }
                    }
                },
                "nvme": {
                    "description": [
                        "nvme protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": "If true, an SVM administrator can manage the NVMe service. If false, only the cluster administrator can manage the service.",
                            "type": "bool"
                        },
                        "enabled": {
                            "description": "If allowed, setting to true enables the NVMe service.",
                            "type": "bool"
                        }
                    }
                },
                "ndmp": {
                    "description": [
                        "Network Data Management Protocol service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": [
                                "If this is set to true, an SVM administrator can manage the NDMP service",
                                "If it is false, only the cluster administrator can manage the service.",
                                "Requires ONTAP 9.10.1 or later."
                            ],
                            "type": "bool"
                        }
                    },
                    "version_added": "21.24.0"
                },
                "s3": {
                    "description": [
                        "s3 service"
                    ],
                    "type": "dict",
                    "suboptions": {
                        "allowed": {
                            "description": [
                                "If true, an SVM administrator can manage the s3 service. If false, only the cluster administrator can manage the service.",
                                "Requires ONTAP 9.7.0 or later."
                            ],
                            "type": "bool"
                        }
                    }
                }
            }
        },
        "aggr_list": {
            "description": [
                "List of aggregates assigned for volume operations.",
                "These aggregates could be shared for use with other Vservers.",
                "When specified as part of a vserver-create, this field represents the list of aggregates that are assigned to the Vserver for volume operations.",
                "When part of vserver-get-iter call, this will return the list of Vservers which have any of the aggregates specified as part of the aggr list."
            ],
            "type": "list",
            "elements": "str"
        },
        "ipspace": {
            "description": [
                "IPSpace name",
                "Cannot be modified after creation."
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "snapshot_policy": {
            "description": [
                "Default snapshot policy setting for all volumes of the Vserver. This policy will be assigned to all volumes created in this Vserver unless the volume create request explicitly provides a snapshot policy or volume is modified later with a specific snapshot policy. A volume-level snapshot policy always overrides the default Vserver-wide snapshot policy."
            ],
            "version_added": "2.7.0",
            "type": "str"
        },
        "language": {
            "description": [
                "Language to use for the SVM",
                "Default to C.UTF-8",
                "Possible values   Language",
                "c                 POSIX",
                "ar                Arabic",
                "cs                Czech",
                "da                Danish",
                "de                German",
                "en                English",
                "en_us             English (US)",
                "es                Spanish",
                "fi                Finnish",
                "fr                French",
                "he                Hebrew",
                "hr                Croatian",
                "hu                Hungarian",
                "it                Italian",
                "ja                Japanese euc-j",
                "ja_v1             Japanese euc-j",
                "ja_jp.pck         Japanese PCK (sjis)",
                "ja_jp.932         Japanese cp932",
                "ja_jp.pck_v2      Japanese PCK (sjis)",
                "ko                Korean",
                "no                Norwegian",
                "nl                Dutch",
                "pl                Polish",
                "pt                Portuguese",
                "ro                Romanian",
                "ru                Russian",
                "sk                Slovak",
                "sl                Slovenian",
                "sv                Swedish",
                "tr                Turkish",
                "zh                Simplified Chinese",
                "zh.gbk            Simplified Chinese (GBK)",
                "zh_tw             Traditional Chinese euc-tw",
                "zh_tw.big5        Traditional Chinese Big 5",
                "utf8mb4",
                "Most of the values accept a .utf_8 suffix, e.g. fr.utf_8"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "subtype": {
            "description": [
                "The subtype for vserver to be created.",
                "Cannot be modified after creation."
            ],
            "choices": [
                "default",
                "dp_destination",
                "sync_source",
                "sync_destination"
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "comment": {
            "description": [
                "When specified as part of a vserver-create, this field represents the comment associated with the Vserver.",
                "When part of vserver-get-iter call, this will return the list of matching Vservers."
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "ignore_rest_unsupported_options": {
            "description": [
                "When true, ignore C(root_volume), C(root_volume_aggregate), C(root_volume_security_style) options if target supports REST.",
                "Ignored when C(use_rest) is set to never."
            ],
            "type": "bool",
            "default": false,
            "version_added": "21.10.0"
        },
        "max_volumes": {
            "description": [
                "Maximum number of volumes that can be created on the vserver.",
                "Expects an integer or C(unlimited)."
            ],
            "type": "str",
            "version_added": "21.12.0"
        },
        "web": {
            "description": [
                "web services security configuration.",
                "requires ONTAP 9.8 or later for certificate name.",
                "requires ONTAP 9.10.1 or later for the other options."
            ],
            "type": "dict",
            "suboptions": {
                "certificate": {
                    "description": [
                        "name of certificate used by cluster and node management interfaces for TLS connection requests.",
                        "The certificate must be of type \"server\"."
                    ],
                    "type": "str"
                },
                "client_enabled": {
                    "description": "whether client authentication is enabled.",
                    "type": "bool"
                },
                "ocsp_enabled": {
                    "description": "whether online certificate status protocol verification is enabled.",
                    "type": "bool"
                }
            }
        }
    },
    "netapp.ontap.na_ontap_svm_options": {
        "name": {
            "description": [
                "Name of the option."
            ],
            "type": "str"
        },
        "value": {
            "description": [
                "Value of the option.",
                "Value must be in quote"
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to which this option belongs to."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_ucadapter": {
        "state": {
            "description": [
                "Whether the specified adapter should exist."
            ],
            "required": false,
            "choices": [
                "present"
            ],
            "default": "present",
            "type": "str"
        },
        "adapter_name": {
            "description": [
                "Specifies the adapter name."
            ],
            "required": true,
            "type": "str"
        },
        "node_name": {
            "description": [
                "Specifies the adapter home node."
            ],
            "required": true,
            "type": "str"
        },
        "mode": {
            "description": [
                "Specifies the mode of the adapter."
            ],
            "type": "str"
        },
        "type": {
            "description": [
                "Specifies the fc4 type of the adapter."
            ],
            "type": "str"
        },
        "pair_adapters": {
            "description": [
                "Specifies the list of adapters which also need to be offline along with the current adapter during modifying.",
                "If specified adapter works in a group or pair, the other adapters might also need to offline before modify the specified adapter.",
                "The mode of pair_adapters are modified along with the adapter, the type of the pair_adapters are not modified."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "20.6.0"
        }
    },
    "netapp.ontap.na_ontap_unix_group": {
        "state": {
            "description": [
                "Whether the specified group should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specifies UNIX group's name, unique for each group.",
                "Non-modifiable."
            ],
            "required": true,
            "type": "str"
        },
        "id": {
            "description": [
                "Specifies an identification number for the UNIX group.",
                "Group ID is unique for each UNIX group.",
                "Required for create, modifiable."
            ],
            "type": "int"
        },
        "vserver": {
            "description": [
                "Specifies the Vserver for the UNIX group.",
                "Non-modifiable."
            ],
            "required": true,
            "type": "str"
        },
        "skip_name_validation": {
            "description": [
                "Specifies if group name validation is skipped."
            ],
            "type": "bool"
        },
        "users": {
            "description": [
                "Specifies the users associated with this group. Should be comma separated.",
                "It represents the expected state of a list of users at any time.",
                "Add a user into group if it is specified in expected state but not in current state.",
                "Delete a user from group if it is specified in current state but not in expected state.",
                "To delete all current users, use '' as value."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.9.0"
        }
    },
    "netapp.ontap.na_ontap_unix_user": {
        "state": {
            "description": [
                "Whether the specified user should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "Specifies user's UNIX account name.",
                "REST support requires ONTAP version 9.9.0 or later.",
                "Non-modifiable."
            ],
            "required": true,
            "type": "str"
        },
        "primary_gid": {
            "description": [
                "Specifies the primary group identification number for the UNIX user.",
                "REST support requires ONTAP version 9.9.0 or later.",
                "Required for create, modifiable."
            ],
            "aliases": [
                "group_id"
            ],
            "type": "int",
            "version_added": "21.21.0"
        },
        "vserver": {
            "description": [
                "Specifies the Vserver for the UNIX user.",
                "REST support requires ONTAP version 9.9.0 or later.",
                "Non-modifiable."
            ],
            "required": true,
            "type": "str"
        },
        "id": {
            "description": [
                "Specifies an identification number for the UNIX user.",
                "REST support requires ONTAP version 9.9.0 or later.",
                "Required for create, modifiable."
            ],
            "type": "int"
        },
        "full_name": {
            "description": [
                "Specifies the full name of the UNIX user",
                "REST support requires ONTAP version 9.9.0 or later.",
                "Optional for create, modifiable."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_user": {
        "state": {
            "description": [
                "Whether the specified user should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the user to manage."
            ],
            "required": true,
            "type": "str"
        },
        "application_strs": {
            "version_added": "21.6.0",
            "description": [
                "List of applications to grant access to.",
                "This option maintains backward compatibility with the existing C(applications) option, but is limited.",
                "It is recommended to use the new C(application_dicts) option which provides more flexibility.",
                "Creating a login with application console, telnet, rsh, and service-processor for a data vserver is not supported.",
                "Module supports both service-processor and service_processor choices.",
                "ZAPI requires service-processor, while REST requires service_processor, except for an issue with ONTAP 9.6 and 9.7.",
                "snmp is not supported in REST.",
                "Either C(application_dicts) or C(application_strs) is required."
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "console",
                "http",
                "ontapi",
                "rsh",
                "snmp",
                "service_processor",
                "service-processor",
                "sp",
                "ssh",
                "telnet"
            ],
            "aliases": [
                "application",
                "applications"
            ]
        },
        "application_dicts": {
            "version_added": "21.6.0",
            "description": [
                "List of applications to grant access to.  Provides better control on applications and authentication methods.",
                "Creating a login with application console, telnet, rsh, and service-processor for a data vserver is not supported.",
                "Module supports both service-processor and service_processor choices.",
                "ZAPI requires service-processor, while REST requires service_processor, except for an issue with ONTAP 9.6 and 9.7.",
                "snmp is not supported in REST.",
                "Either C(application_dicts) or C(application_strs) is required."
            ],
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "application": {
                    "description": "name of the application.",
                    "type": "str",
                    "choices": [
                        "console",
                        "http",
                        "ontapi",
                        "rsh",
                        "snmp",
                        "service_processor",
                        "service-processor",
                        "sp",
                        "ssh",
                        "telnet"
                    ],
                    "required": true
                },
                "authentication_methods": {
                    "description": "list of authentication methods for the application (see C(authentication_method)).",
                    "type": "list",
                    "elements": "str",
                    "choices": [
                        "community",
                        "password",
                        "publickey",
                        "domain",
                        "nsswitch",
                        "usm",
                        "cert",
                        "saml"
                    ],
                    "required": true
                },
                "second_authentication_method": {
                    "description": "when using ssh, optional additional authentication method for MFA.",
                    "type": "str",
                    "choices": [
                        "none",
                        "password",
                        "publickey",
                        "nsswitch"
                    ]
                }
            }
        },
        "authentication_method": {
            "description": [
                "Authentication method for the application.  If you need more than one method, use C(application_dicts).",
                "Not all authentication methods are valid for an application.",
                "Valid authentication methods for each application are as denoted in I(authentication_choices_description).",
                "Password for console application",
                "Password, domain, nsswitch, cert, saml for http application.",
                "Password, domain, nsswitch, cert, saml for ontapi application.",
                "SAML is only supported with REST, but seems to work with ZAPI as well.",
                "Community for snmp application (when creating SNMPv1 and SNMPv2 users).",
                "The usm and community for snmp application (when creating SNMPv3 users).",
                "Password for sp application.",
                "Password for rsh application.",
                "Password for telnet application.",
                "Password, publickey, domain, nsswitch for ssh application.",
                "Required when C(application_strs) is present."
            ],
            "type": "str",
            "choices": [
                "community",
                "password",
                "publickey",
                "domain",
                "nsswitch",
                "usm",
                "cert",
                "saml"
            ]
        },
        "set_password": {
            "description": [
                "Password for the user account.",
                "It is ignored for creating snmp users, but is required for creating non-snmp users.",
                "For an existing user, this value will be used as the new password."
            ],
            "type": "str"
        },
        "role_name": {
            "description": [
                "The name of the role. Required when C(state=present)"
            ],
            "type": "str"
        },
        "lock_user": {
            "description": [
                "Whether the specified user account is locked."
            ],
            "type": "bool"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "Required with ZAPI.",
                "With REST, ignore this option for creating cluster scoped interface."
            ],
            "aliases": [
                "svm"
            ],
            "type": "str"
        },
        "authentication_protocol": {
            "description": [
                "Authentication protocol for the snmp user.",
                "When cluster FIPS mode is on, 'sha' and 'sha2-256' are the only possible and valid values.",
                "When cluster FIPS mode is off, the default value is 'none'.",
                "When cluster FIPS mode is on, the default value is 'sha'.",
                "Only available for 'usm' authentication method and non modifiable."
            ],
            "choices": [
                "none",
                "md5",
                "sha",
                "sha2-256"
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "authentication_password": {
            "description": [
                "Password for the authentication protocol. This should be minimum 8 characters long.",
                "This is required for 'md5', 'sha' and 'sha2-256' authentication protocols and not required for 'none'.",
                "Only available for 'usm' authentication method and non modifiable."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "engine_id": {
            "description": [
                "Authoritative entity's EngineID for the SNMPv3 user.",
                "This should be specified as a hexadecimal string.",
                "Engine ID with first bit set to 1 in first octet should have a minimum of 5 or maximum of 32 octets.",
                "Engine Id with first bit set to 0 in the first octet should be 12 octets in length.",
                "Engine Id cannot have all zeros in its address.",
                "Only available for 'usm' authentication method and non modifiable."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "privacy_protocol": {
            "description": [
                "Privacy protocol for the snmp user.",
                "When cluster FIPS mode is on, 'aes128' is the only possible and valid value.",
                "When cluster FIPS mode is off, the default value is 'none'. When cluster FIPS mode is on, the default value is 'aes128'.",
                "Only available for 'usm' authentication method and non modifiable."
            ],
            "choices": [
                "none",
                "des",
                "aes128"
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "privacy_password": {
            "description": [
                "Password for the privacy protocol. This should be minimum 8 characters long.",
                "This is required for 'des' and 'aes128' privacy protocols and not required for 'none'.",
                "Only available for 'usm' authentication method and non modifiable."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "remote_switch_ipaddress": {
            "description": [
                "This optionally specifies the IP Address of the remote switch.",
                "The remote switch could be a cluster switch monitored by Cluster Switch Health Monitor (CSHM) or a Fiber Channel (FC) switch monitored by Metro Cluster Health Monitor (MCC-HM).",
                "This is applicable only for a remote SNMPv3 user i.e. only if user is a remote (non-local) user, application is snmp and authentication method is usm."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "replace_existing_apps_and_methods": {
            "description": [
                "If the user already exists, the current applications and authentications methods are replaced when state=present.",
                "If the user already exists, the current applications and authentications methods are removed when state=absent.",
                "When using application_dicts or REST, this the only supported behavior.",
                "When using application_strs and ZAPI, this is the behavior when this option is set to always.",
                "When using application_strs and ZAPI, if the option is set to auto, applications that are not listed are not removed.",
                "When using application_strs and ZAPI, if the option is set to auto, authentication mehods that are not listed are not removed.",
                "C(auto) preserve the existing behavior for backward compatibility, but note that REST and ZAPI have inconsistent behavior.",
                "This is another reason to recommend to use C(application_dicts)."
            ],
            "type": "str",
            "choices": [
                "always",
                "auto"
            ],
            "default": "auto",
            "version_added": "20.6.0"
        }
    },
    "netapp.ontap.na_ontap_user_role": {
        "state": {
            "description": [
                "Whether the specified user role should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the role to manage."
            ],
            "required": true,
            "type": "str"
        },
        "command_directory_name": {
            "description": [
                "The command or command directory to which the role has an access.",
                "Required with ZAPI.",
                "Use C(privileges) for rest-role path choices."
            ],
            "type": "str"
        },
        "access_level": {
            "description": [
                "The access level of the role. Defaults to 'all'.",
                "Use C(privileges) for rest-role access choices."
            ],
            "choices": [
                "none",
                "readonly",
                "all"
            ],
            "type": "str"
        },
        "query": {
            "description": [
                "A query for the role. The query must apply to the specified command or directory name.",
                "Use double quotes \"\" for modifying a existing query to none.",
                "Use C(privileges) for rest-role query choices."
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "privileges": {
            "description": [
                "Privileges to give the user roles",
                "REST only"
            ],
            "type": "list",
            "elements": "dict",
            "version_added": "21.23.0",
            "suboptions": {
                "query": {
                    "description": [
                        "A query for the role. The query must apply to the specified command or directory name.",
                        "Query is only supported on 9.11.1+"
                    ],
                    "type": "str"
                },
                "access": {
                    "description": [
                        "The access level of the role.",
                        "For command/command directory path, the only supported enum values are 'none','readonly' and 'all'.",
                        "Options 'read_create', 'read_modify' and 'read_create_modify' are supported only with REST and requires ONTAP 9.11.1 or later versions."
                    ],
                    "choices": [
                        "none",
                        "readonly",
                        "all",
                        "read_create",
                        "read_modify",
                        "read_create_modify"
                    ],
                    "default": "all",
                    "type": "str"
                },
                "path": {
                    "description": [
                        "The api or command to which the role has an access.",
                        "command or command directory path is supported from ONTAP 9.11.1 or later versions.",
                        "Only rest roles are supported for earlier versions."
                    ],
                    "type": "str",
                    "required": true
                }
            }
        },
        "vserver": {
            "description": [
                "The name of the vserver to use.",
                "Required with ZAPI."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_volume": {
        "state": {
            "description": [
                "Whether the specified volume should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "name": {
            "description": [
                "The name of the volume to manage."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "from_name": {
            "description": [
                "Name of the existing volume to be renamed to name."
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "is_infinite": {
            "type": "bool",
            "description": [
                "Set True if the volume is an Infinite Volume.",
                "Deleting an infinite volume is asynchronous."
            ],
            "default": false
        },
        "is_online": {
            "type": "bool",
            "description": [
                "Whether the specified volume is online, or not."
            ],
            "default": true
        },
        "aggregate_name": {
            "description": [
                "The name of the aggregate the flexvol should exist on.",
                "Cannot be set when using the C(nas_application_template) option."
            ],
            "type": "str"
        },
        "tags": {
            "description": [
                "Tags are an optional way to track the uses of a resource.",
                "Tag values must be formatted as key:value strings, example [\"team:csi\", \"environment:test\"]"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "22.6.0"
        },
        "nas_application_template": {
            "description": [
                "additional options when using the application/applications REST API to create a volume.",
                "the module is using ZAPI by default, and switches to REST if any suboption is present.",
                "create a FlexVol by default.",
                "create a FlexGroup if C(auto_provision_as) is set and C(FlexCache) option is not present.",
                "create a FlexCache if C(flexcache) option is present."
            ],
            "type": "dict",
            "version_added": "20.12.0",
            "suboptions": {
                "flexcache": {
                    "description": "whether to create a flexcache.  If absent, a FlexVol or FlexGroup is created.",
                    "type": "dict",
                    "suboptions": {
                        "dr_cache": {
                            "description": [
                                "whether to use the same flexgroup msid as the origin.",
                                "requires ONTAP 9.9 and REST.",
                                "create only option, ignored if the flexcache already exists."
                            ],
                            "type": "bool",
                            "version_added": "21.3.0"
                        },
                        "origin_svm_name": {
                            "description": "the remote SVM for the flexcache.",
                            "type": "str",
                            "required": true
                        },
                        "origin_component_name": {
                            "description": "the remote component for the flexcache.",
                            "type": "str",
                            "required": true
                        }
                    }
                },
                "cifs_access": {
                    "description": [
                        "The list of CIFS access controls.  You must provide I(user_or_group) or I(access) to enable CIFS access."
                    ],
                    "type": "list",
                    "elements": "dict",
                    "suboptions": {
                        "access": {
                            "description": "The CIFS access granted to the user or group.  Default is full_control.",
                            "type": "str",
                            "choices": [
                                "change",
                                "full_control",
                                "no_access",
                                "read"
                            ]
                        },
                        "user_or_group": {
                            "description": "The name of the CIFS user or group that will be granted access.  Default is Everyone.",
                            "type": "str"
                        }
                    }
                },
                "nfs_access": {
                    "description": [
                        "The list of NFS access controls.  You must provide I(host) or I(access) to enable NFS access.",
                        "Mutually exclusive with export_policy option."
                    ],
                    "type": "list",
                    "elements": "dict",
                    "suboptions": {
                        "access": {
                            "description": "The NFS access granted.  Default is rw.",
                            "type": "str",
                            "choices": [
                                "none",
                                "ro",
                                "rw"
                            ]
                        },
                        "host": {
                            "description": "The name of the NFS entity granted access.  Default is 0.0.0.0/0.",
                            "type": "str"
                        }
                    }
                },
                "storage_service": {
                    "description": [
                        "The performance service level (PSL) for this volume"
                    ],
                    "type": "str",
                    "choices": [
                        "value",
                        "performance",
                        "extreme"
                    ]
                },
                "tiering": {
                    "description": [
                        "Cloud tiering policy (see C(tiering_policy) for a more complete description)."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "control": {
                            "description": "Storage tiering placement rules for the container.",
                            "choices": [
                                "required",
                                "best_effort",
                                "disallowed"
                            ],
                            "type": "str"
                        },
                        "policy": {
                            "description": [
                                "Cloud tiering policy (see C(tiering_policy)).",
                                "Must match C(tiering_policy) if both are present."
                            ],
                            "choices": [
                                "all",
                                "auto",
                                "none",
                                "snapshot-only"
                            ],
                            "type": "str"
                        },
                        "object_stores": {
                            "description": "list of object store names for tiering.",
                            "type": "list",
                            "elements": "str"
                        }
                    }
                },
                "exclude_aggregates": {
                    "description": [
                        "The list of aggregate names to exclude when creating a volume.",
                        "Requires ONTAP 9.9.1 GA or later."
                    ],
                    "type": "list",
                    "elements": "str",
                    "version_added": "21.7.0"
                },
                "use_nas_application": {
                    "description": [
                        "Whether to use the application/applications REST/API to create a volume.",
                        "This will default to true if any other suboption is present."
                    ],
                    "type": "bool",
                    "default": true
                },
                "cifs_share_name": {
                    "description": [
                        "The name of the CIFS share.",
                        "Requires ONTAP 9.11 or later."
                    ],
                    "type": "str",
                    "version_added": "22.13.0"
                },
                "snapshot_locking_enabled": {
                    "description": [
                        "Indicates whether Snapshot copy locking is enabled on the volume.",
                        "Requires ONTAP 9.13.1 or later."
                    ],
                    "type": "bool",
                    "version_added": "22.13.0"
                },
                "snaplock": {
                    "description": "Requires ONTAP 9.12 or later.",
                    "type": "dict",
                    "version_added": "22.13.0",
                    "suboptions": {
                        "snaplock_type": {
                            "description": "The SnapLock type of the smart container.",
                            "choices": [
                                "compliance",
                                "enterprise",
                                "non_snaplock"
                            ],
                            "type": "str"
                        },
                        "autocommit_period": {
                            "description": [
                                "Specifies the autocommit period for SnapLock volume.",
                                "Duration is in the ISO-8601 duration format (eg PY, PM, PD, PTH, PTM).",
                                "Examples are P30M, P10Y, PT1H, none. A duration that combines different periods is not supported."
                            ],
                            "type": "str"
                        },
                        "append_mode_enabled": {
                            "description": "Specifies if the volume append mode is enabled or disabled.",
                            "type": "bool"
                        },
                        "retention": {
                            "description": [
                                "Default, maximum, and minumum retention periods for files committed to the WORM state on the volume.",
                                "Durations are in the ISO-8601 duration format, see autocommit_period."
                            ],
                            "type": "dict",
                            "suboptions": {
                                "default": {
                                    "description": "Default retention period that is applied to files while committing them to the WORM state without an associated retention period.",
                                    "type": "str"
                                },
                                "maximum": {
                                    "description": "Maximum allowed retention period for files committed to the WORM state on the volume.",
                                    "type": "str"
                                },
                                "minimum": {
                                    "description": "Minimum allowed retention period for files committed to the WORM state on the volume.",
                                    "type": "str"
                                }
                            }
                        }
                    }
                }
            }
        },
        "size": {
            "description": [
                "The size of the volume in (size_unit). Required when C(state=present)."
            ],
            "type": "int"
        },
        "size_unit": {
            "description": [
                "The unit used to interpret the size parameter."
            ],
            "choices": [
                "bytes",
                "b",
                "kb",
                "mb",
                "gb",
                "tb",
                "pb",
                "eb",
                "zb",
                "yb"
            ],
            "type": "str",
            "default": "gb"
        },
        "size_change_threshold": {
            "description": [
                "Percentage in size change to trigger a resize.",
                "When this parameter is greater than 0, a difference in size between what is expected and what is configured is ignored if it is below the threshold.",
                "For instance, the nas application allocates a larger size than specified to account for overhead.",
                "Set this to 0 for an exact match."
            ],
            "type": "int",
            "default": 10,
            "version_added": "20.12.0"
        },
        "sizing_method": {
            "description": [
                "Represents the method to modify the size of a FlexGroup.",
                "use_existing_resources - Increases or decreases the size of the FlexGroup by increasing or decreasing the size of the current FlexGroup resources.",
                "add_new_resources - Increases the size of the FlexGroup by adding new resources. This is limited to two new resources per available aggregate.",
                "This is only supported if REST is enabled (ONTAP 9.6 or later) and only for FlexGroups.  ONTAP defaults to use_existing_resources."
            ],
            "type": "str",
            "choices": [
                "add_new_resources",
                "use_existing_resources"
            ],
            "version_added": "20.12.0"
        },
        "type": {
            "description": [
                "The volume type, either read-write (RW) or data-protection (DP)."
            ],
            "type": "str"
        },
        "export_policy": {
            "description": [
                "Name of the export policy.",
                "Mutually exclusive with nfs_access suboption in nas_application_template."
            ],
            "type": "str",
            "aliases": [
                "policy"
            ]
        },
        "junction_path": {
            "description": [
                "Junction path of the volume.",
                "To unmount, use junction path C('')."
            ],
            "type": "str"
        },
        "space_guarantee": {
            "description": [
                "Space guarantee style for the volume.",
                "The file setting is no longer supported."
            ],
            "choices": [
                "none",
                "file",
                "volume"
            ],
            "type": "str"
        },
        "percent_snapshot_space": {
            "description": [
                "Amount of space reserved for snapshot copies of the volume."
            ],
            "type": "int"
        },
        "volume_security_style": {
            "description": [
                "The security style associated with this volume."
            ],
            "choices": [
                "mixed",
                "ntfs",
                "unified",
                "unix"
            ],
            "type": "str"
        },
        "encrypt": {
            "type": "bool",
            "description": [
                "Whether or not to enable Volume Encryption.",
                "If not present, ONTAP defaults to false at volume creation.",
                "Changing encrypt value after creation requires ONTAP 9.3 or later."
            ],
            "version_added": "2.7.0"
        },
        "efficiency_policy": {
            "description": [
                "Allows a storage efficiency policy to be set on volume creation."
            ],
            "type": "str",
            "version_added": "2.7.0"
        },
        "unix_permissions": {
            "description": [
                "Unix permission bits in octal or symbolic format.",
                "For example, 0 is equivalent to ------------, 777 is equivalent to ---rwxrwxrwx,both formats are accepted.",
                "The valid octal value ranges between 0 and 777 inclusive."
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "group_id": {
            "description": [
                "The UNIX group ID for the volume. The default value is 0 ('root')."
            ],
            "type": "int",
            "version_added": "20.1.0"
        },
        "user_id": {
            "description": [
                "The UNIX user ID for the volume. The default value is 0 ('root')."
            ],
            "type": "int",
            "version_added": "20.1.0"
        },
        "snapshot_policy": {
            "description": [
                "The name of the snapshot policy.",
                "The default policy name is 'default'.",
                "If present, this will set the protection_type when using C(nas_application_template)."
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "aggr_list": {
            "description": [
                "an array of names of aggregates to be used for FlexGroup constituents."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "2.8.0"
        },
        "aggr_list_multiplier": {
            "description": [
                "The number of times to iterate over the aggregates listed with the aggr_list parameter when creating a FlexGroup."
            ],
            "type": "int",
            "version_added": "2.8.0"
        },
        "auto_provision_as": {
            "description": [
                "Automatically provision a FlexGroup volume."
            ],
            "version_added": "2.8.0",
            "choices": [
                "flexgroup"
            ],
            "type": "str"
        },
        "snapdir_access": {
            "description": [
                "This is an advanced option, the default is False.",
                "Enable the visible '.snapshot' directory that is normally present at system internal mount points.",
                "This value also turns on access to all other '.snapshot' directories in the volume.",
                "This option is supported in REST for ONTAP 9.13.1 or later with ONTAP collection version 22.8.0 or later."
            ],
            "type": "bool",
            "version_added": "2.8.0"
        },
        "atime_update": {
            "description": [
                "This is an advanced option, the default is True.",
                "If false, prevent the update of inode access times when a file is read.",
                "This value is useful for volumes with extremely high read traffic, since it prevents writes to the inode file for the volume from contending with reads from other files.",
                "This field should be used carefully.",
                "That is, use this field when you know in advance that the correct access time for inodes will not be needed for files on that volume.",
                "This option is supported in REST for ONTAP 9.8 or later with ONTAP collection version 22.8.0 or later."
            ],
            "type": "bool",
            "version_added": "2.8.0"
        },
        "vol_nearly_full_threshold_percent": {
            "description": [
                "Specifies the percentage at which the volume is considered nearly full, and above which an EMS warning will be generated.",
                "The default value is 95%. The maximum value for this option is 99%.",
                "Setting this threshold to 0 disables the volume nearly full space alerts.",
                "Supported only with REST and requires ONTAP 9.9 or later."
            ],
            "type": "int",
            "version_added": "22.8.0"
        },
        "vol_full_threshold_percent": {
            "description": [
                "Specifies the percentage at which the volume is considered full, and above which a critical EMS error will be generated.",
                "The default value is 98%. The maximum value for this option is 100%.",
                "Setting this threshold to 0 disables the volume full space alerts.",
                "Supported only with REST and requires ONTAP 9.9 or later."
            ],
            "type": "int",
            "version_added": "22.8.0"
        },
        "large_size_enabled": {
            "description": [
                "Indicates if the support for large FlexVol volumes and large files is enabled on this volume."
            ],
            "type": "bool",
            "version_added": "22.14.0"
        },
        "wait_for_completion": {
            "description": [
                "Set this parameter to 'true' for synchronous execution during create (wait until volume status is online)",
                "Set this parameter to 'false' for asynchronous execution",
                "For asynchronous, execution exits as soon as the request is sent, without checking volume status"
            ],
            "type": "bool",
            "default": false,
            "version_added": "2.8.0"
        },
        "time_out": {
            "description": [
                "With ZAPI - time to wait for Flexgroup creation, modification, or deletion in seconds.",
                "With REST - time to wait for any volume creation, modification, or deletion in seconds.",
                "Error out if task is not completed in defined time.",
                "With ZAPI - if 0, the request is asynchronous.",
                "Default is set to 3 minutes.",
                "Use C(max_wait_time) and C(wait_for_completion) for volume move and encryption operations."
            ],
            "default": 180,
            "type": "int",
            "version_added": "2.8.0"
        },
        "max_wait_time": {
            "description": [
                "Volume move and encryption operations might take longer time to complete.",
                "With C(wait_for_completion) set, module will wait for time set in this option for volume move and encryption to complete.",
                "If time exipres, module exit and the operation may still be running.",
                "Default is set to 10 minutes."
            ],
            "default": 600,
            "type": "int",
            "version_added": "22.0.0"
        },
        "language": {
            "description": [
                "Language to use for Volume",
                "Default uses SVM language",
                "Possible values   Language",
                "c                 POSIX",
                "ar                Arabic",
                "cs                Czech",
                "da                Danish",
                "de                German",
                "en                English",
                "en_us             English (US)",
                "es                Spanish",
                "fi                Finnish",
                "fr                French",
                "he                Hebrew",
                "hr                Croatian",
                "hu                Hungarian",
                "it                Italian",
                "ja                Japanese euc-j",
                "ja_v1             Japanese euc-j",
                "ja_jp.pck         Japanese PCK (sjis)",
                "ja_jp.932         Japanese cp932",
                "ja_jp.pck_v2      Japanese PCK (sjis)",
                "ko                Korean",
                "no                Norwegian",
                "nl                Dutch",
                "pl                Polish",
                "pt                Portuguese",
                "ro                Romanian",
                "ru                Russian",
                "sk                Slovak",
                "sl                Slovenian",
                "sv                Swedish",
                "tr                Turkish",
                "zh                Simplified Chinese",
                "zh.gbk            Simplified Chinese (GBK)",
                "zh_tw             Traditional Chinese euc-tw",
                "zh_tw.big5        Traditional Chinese Big 5",
                "To use UTF-8 as the NFS character set, append '.UTF-8' to the language code"
            ],
            "type": "str",
            "version_added": "2.8.0"
        },
        "qos_policy_group": {
            "description": [
                "Specifies a QoS policy group to be set on volume."
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "qos_adaptive_policy_group": {
            "description": [
                "Specifies a QoS adaptive policy group to be set on volume."
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "tiering_policy": {
            "description": [
                "The tiering policy that is to be associated with the volume.",
                "This policy decides whether the blocks of a volume will be tiered to the capacity tier.",
                "snapshot-only policy allows tiering of only the volume snapshot copies not associated with the active file system.",
                "auto policy allows tiering of both snapshot and active file system user data to the capacity tier.",
                "backup policy on DP volumes allows all transferred user data blocks to start in the capacity tier.",
                "all is the REST equivalent for backup.",
                "When set to none, the Volume blocks will not be tiered to the capacity tier.",
                "If no value specified, the volume is assigned snapshot only by default.",
                "Requires ONTAP 9.4 or later."
            ],
            "choices": [
                "snapshot-only",
                "auto",
                "backup",
                "none",
                "all"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "space_slo": {
            "description": [
                "Specifies the space SLO type for the volume. The space SLO type is the Service Level Objective for space management for the volume.",
                "The space SLO value is used to enforce existing volume settings so that sufficient space is set aside on the aggregate to meet the space SLO.",
                "This parameter is not supported on Infinite Volumes."
            ],
            "choices": [
                "none",
                "thick",
                "semi-thick"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "nvfail_enabled": {
            "description": [
                "If true, the controller performs additional work at boot and takeover times if it finds that there has been any potential data loss in the volume's constituents due to an NVRAM failure.",
                "The volume's constituents would be put in a special state called 'in-nvfailed-state' such that protocol access is blocked.",
                "This will cause the client applications to crash and thus prevent access to stale data.",
                "To get out of this situation, the admin needs to manually clear the 'in-nvfailed-state' on the volume's constituents."
            ],
            "type": "bool",
            "version_added": "2.9.0"
        },
        "vserver_dr_protection": {
            "description": [
                "Specifies the protection type for the volume in a Vserver DR setup."
            ],
            "choices": [
                "protected",
                "unprotected"
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "comment": {
            "description": [
                "Sets a comment associated with the volume."
            ],
            "type": "str",
            "version_added": "2.9.0"
        },
        "snapshot_auto_delete": {
            "description": [
                "A dictionary for the auto delete options and values.",
                "All the above mentioned options except 'destroy_list' are supported in REST for ONTAP 9.13.1 or later with ONTAP collection version 22.8.0 or later."
            ],
            "type": "dict",
            "version_added": "20.4.0",
            "suboptions": {
                "state": {
                    "description": "Determines if the snapshot autodelete is currently enabled for the volume.",
                    "type": "str",
                    "choices": [
                        "on",
                        "off"
                    ]
                },
                "commitment": {
                    "description": "Determines the snapshots that the snapshot autodelete is allowed to delete to get back space.",
                    "type": "str",
                    "choices": [
                        "try",
                        "disrupt",
                        "destroy"
                    ]
                },
                "trigger": {
                    "description": [
                        "Determines the condition which starts the automatic deletion of snapshots.",
                        "Note - C(space_reserve) option is deprecated and may be removed in the future."
                    ],
                    "type": "str",
                    "choices": [
                        "volume",
                        "snap_reserve",
                        "space_reserve"
                    ]
                },
                "target_free_space": {
                    "description": [
                        "Determines when snapshot autodelete should stop deleting snapshots.",
                        "Depending on the trigger, snapshots are deleted until the target free space percentage is reached."
                    ],
                    "type": "int"
                },
                "delete_order": {
                    "description": "Determines if the oldest or newest snapshot is deleted first.",
                    "type": "str",
                    "choices": [
                        "newest_first",
                        "oldest_first"
                    ]
                },
                "defer_delete": {
                    "description": "Determines what kind of snapshot to delete in the end.",
                    "type": "str",
                    "choices": [
                        "scheduled",
                        "user_created",
                        "prefix",
                        "none"
                    ]
                },
                "prefix": {
                    "description": [
                        "Can be set to provide the prefix string for the 'prefix' value of the 'defer_delete' option.",
                        "The prefix string can be 15 characters long."
                    ],
                    "type": "str"
                },
                "destroy_list": {
                    "description": [
                        "A comma seperated list of services which can be destroyed if the snapshot backing that service is deleted.",
                        "For 7-mode, the possible values for this option are a combination of 'lun_clone', 'vol_clone', 'cifs_share', 'file_clone' or 'none'.",
                        "For cluster-mode, the possible values for this option are a combination of 'lun_clone,file_clone' (for LUN clone and/or file clone), 'lun_clone,sfsr' (for LUN clone and/or sfsr), 'vol_clone', 'cifs_share', or 'none'."
                    ],
                    "type": "str"
                }
            }
        },
        "cutover_action": {
            "description": [
                "Specifies the action to be taken for cutover.",
                "Possible values are 'abort_on_failure', 'defer_on_failure', 'force' and 'wait'. Default is 'defer_on_failure'."
            ],
            "choices": [
                "abort_on_failure",
                "defer_on_failure",
                "force",
                "wait"
            ],
            "type": "str",
            "version_added": "20.5.0"
        },
        "check_interval": {
            "description": [
                "The amount of time in seconds to wait between checks of a volume to see if it has moved successfully."
            ],
            "default": 30,
            "type": "int",
            "version_added": "20.6.0"
        },
        "from_vserver": {
            "description": [
                "The source vserver of the volume is rehosted."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "auto_remap_luns": {
            "description": [
                "Flag to control automatic map of LUNs."
            ],
            "type": "bool",
            "version_added": "20.6.0"
        },
        "force_unmap_luns": {
            "description": [
                "Flag to control automatic unmap of LUNs."
            ],
            "type": "bool",
            "version_added": "20.6.0"
        },
        "force_restore": {
            "description": [
                "If this field is set to \"true\", the Snapshot copy is restored even if the volume has one or more newer Snapshot copies which are currently used as reference Snapshot copy by SnapMirror. If a restore is done in this situation, this will cause future SnapMirror transfers to fail.",
                "Option should only be used along with snapshot_restore."
            ],
            "type": "bool",
            "version_added": "20.6.0"
        },
        "preserve_lun_ids": {
            "description": [
                "If this field is set to \"true\", LUNs in the volume being restored will remain mapped and their identities preserved such that host connectivity will not be disrupted during the restore operation. I/O's to the LUN will be fenced during the restore operation by placing the LUNs in an unavailable state. Once the restore operation has completed, hosts will be able to resume I/O access to the LUNs.",
                "Option should only be used along with snapshot_restore."
            ],
            "type": "bool",
            "version_added": "20.6.0"
        },
        "snapshot_restore": {
            "description": [
                "Name of snapshot to restore from.",
                "Not supported on Infinite Volume."
            ],
            "type": "str",
            "version_added": "20.6.0"
        },
        "compression": {
            "description": [
                "Whether to enable compression for the volume (HDD and Flash Pool aggregates).",
                "If this option is not present, it is automatically set to true if inline_compression is true."
            ],
            "type": "bool",
            "version_added": "20.12.0"
        },
        "inline_compression": {
            "description": [
                "Whether to enable inline compression for the volume (HDD and Flash Pool aggregates, AFF platforms)."
            ],
            "type": "bool",
            "version_added": "20.12.0"
        },
        "tiering_minimum_cooling_days": {
            "description": [
                "Determines how many days must pass before inactive data in a volume using the Auto or Snapshot-Only policy is considered cold and eligible for tiering.",
                "This option is only supported in REST 9.8 or later."
            ],
            "type": "int",
            "version_added": "21.16.0"
        },
        "logical_space_enforcement": {
            "description": [
                "This optionally specifies whether to perform logical space accounting on the volume. When space is enforced logically, ONTAP enforces volume settings such that all the physical space saved by the storage efficiency features will be calculated as used.",
                "This is only supported with REST."
            ],
            "type": "bool",
            "version_added": "21.16.0"
        },
        "logical_space_reporting": {
            "description": [
                "This optionally specifies whether to report space logically on the volume. When space is reported logically, ONTAP reports the volume space such that all the physical space saved by the storage efficiency features are also reported as used.",
                "This is only supported with REST."
            ],
            "type": "bool",
            "version_added": "21.16.0"
        },
        "snaplock": {
            "description": [
                "Starting with ONTAP 9.10.1, snaplock.type is set at the volume level.",
                "The other suboptions can be set or modified when using REST on earlier versions of ONTAP.",
                "These option and suboptions are only supported with REST."
            ],
            "type": "dict",
            "version_added": "21.18.0",
            "suboptions": {
                "append_mode_enabled": {
                    "description": [
                        "when enabled, all the files created with write permissions on the volume are, by default, WORM appendable files. The user can append the data to a WORM appendable file but cannot modify the existing contents of the file nor delete the file until it expires."
                    ],
                    "type": "bool"
                },
                "autocommit_period": {
                    "description": [
                        "autocommit period for SnapLock volume. All files which are not modified for a period greater than the autocommit period of the volume are committed to the WORM state.",
                        "duration is in the ISO-8601 duration format (eg PY, PM, PD, PTH, PTM).",
                        "examples P30M, P10Y, PT1H, \"none\".  A duration that combines different periods is not supported."
                    ],
                    "type": "str"
                },
                "privileged_delete": {
                    "description": [
                        "privileged-delete attribute of a SnapLock volume.",
                        "On a SnapLock Enterprise (SLE) volume, a designated privileged user can selectively delete files irrespective of the retention time of the file.",
                        "On a SnapLock Compliance (SLC) volume, it is always permanently_disabled."
                    ],
                    "type": "str",
                    "choices": [
                        "disabled",
                        "enabled",
                        "permanently_disabled"
                    ]
                },
                "retention": {
                    "description": [
                        "default, maximum, and minumum retention periods for files committed to the WORM state on the volume.",
                        "durations are in the ISO-8601 duration format, see autocommit_period."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "default": {
                            "description": [
                                "default retention period that is applied to files while committing them to the WORM state without an associated retention period."
                            ],
                            "type": "str"
                        },
                        "maximum": {
                            "description": [
                                "maximum allowed retention period for files committed to the WORM state on the volume."
                            ],
                            "type": "str"
                        },
                        "minimum": {
                            "description": [
                                "minimum allowed retention period for files committed to the WORM state on the volume."
                            ],
                            "type": "str"
                        }
                    }
                },
                "type": {
                    "description": [
                        "The SnapLock type of the volume.",
                        "compliance - A SnapLock Compliance (SLC) volume provides the highest level of WORM protection and an administrator cannot destroy a SLC volume if it contains unexpired WORM files.",
                        "enterprise - An administrator can delete a SnapLock Enterprise (SLE) volume.",
                        "non_snaplock - Indicates the volume is non-snaplock."
                    ],
                    "type": "str",
                    "choices": [
                        "compliance",
                        "enterprise",
                        "non_snaplock"
                    ]
                }
            }
        },
        "max_files": {
            "description": [
                "The maximum number of files (inodes) for user-visible data allowed on the volume.",
                "Note - ONTAP allocates a slightly different value, for instance 3990 when asking for 4000. Tp preserve idempotency, small variations in size are ignored."
            ],
            "type": "int",
            "version_added": "21.18.0"
        },
        "analytics": {
            "description": [
                "Sets file system analytics state of the volume.",
                "Only supported with REST and requires ONTAP 9.8 or later version.",
                "Cannot enable analytics for volume that contains luns."
            ],
            "type": "str",
            "version_added": "22.0.0",
            "choices": [
                "on",
                "off"
            ]
        },
        "activity_tracking": {
            "description": [
                "Sets activity tracking state of the volume.",
                "Only supported with REST and requires ONTAP 9.10 or later version."
            ],
            "type": "str",
            "version_added": "22.12.0",
            "choices": [
                "on",
                "off"
            ]
        },
        "snapshot_locking": {
            "description": [
                "Specifies whether or not snapshot copy locking is enabled on the volume.",
                "Only supported with REST and requires ONTAP 9.12 or later."
            ],
            "type": "bool",
            "version_added": "22.12.0"
        },
        "granular_data": {
            "description": [
                "State of granular data on the volume.",
                "Only FlexGroup volumes support this feature. Once enabled, this setting can only be disabled by restoring a Snapshot copy.",
                "Only supported with REST and requires ONTAP 9.12 or later."
            ],
            "type": "bool",
            "version_added": "22.13.0"
        }
    },
    "netapp.ontap.na_ontap_volume_autosize": {
        "volume": {
            "description": [
                "The name of the flexible volume for which we want to set autosize."
            ],
            "type": "str",
            "required": true
        },
        "mode": {
            "description": [
                "Specify the flexible volume's autosize mode of operation."
            ],
            "type": "str",
            "choices": [
                "grow",
                "grow_shrink",
                "off"
            ]
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "grow_threshold_percent": {
            "description": [
                "Specifies the percentage of the flexible volume's capacity at which autogrow is initiated.",
                "The default grow threshold varies from 85% to 98%, depending on the volume size.",
                "It is an error for the grow threshold to be less than or equal to the shrink threshold.",
                "Range between 0 and 100"
            ],
            "type": "int"
        },
        "increment_size": {
            "description": [
                "Specify the flexible volume's increment size using the following format < number > [k|m|g|t]",
                "The amount is the absolute size to set.",
                "The trailing 'k', 'm', 'g', and 't' indicates the desired units, namely 'kilobytes', 'megabytes', 'gigabytes', and 'terabytes' (respectively)."
            ],
            "type": "str"
        },
        "maximum_size": {
            "description": [
                "Specify the flexible volume's maximum allowed size using the following format < number > [k|m|g|t]",
                "The amount is the absolute size to set.",
                "The trailing 'k', 'm', 'g', and 't' indicates the desired units, namely 'kilobytes', 'megabytes', 'gigabytes', and 'terabytes' (respectively).",
                "The default value is 20% greater than the volume size at the time autosize was enabled.",
                "It is an error for the maximum volume size to be less than the current volume size.",
                "It is also an error for the maximum size to be less than or equal to the minimum size."
            ],
            "type": "str"
        },
        "minimum_size": {
            "description": [
                "Specify the flexible volume's minimum allowed size using the following format < number > [k|m|g|t] The amount is the absolute size to set.",
                "The trailing 'k', 'm', 'g', and 't' indicates the desired units, namely 'kilobytes', 'megabytes', 'gigabytes', and 'terabytes' (respectively).",
                "The default value is the size of the volume at the time the 'grow_shrink' mode was enabled.",
                "It is an error for the minimum size to be greater than or equal to the maximum size."
            ],
            "type": "str"
        },
        "reset": {
            "description": [
                "Sets the values of maximum_size, increment_size, minimum_size, grow_threshold_percent, shrink_threshold_percent and mode to their defaults",
                "If reset paramater is present system will always perform reset action, so idempotency is not supported."
            ],
            "type": "bool"
        },
        "shrink_threshold_percent": {
            "description": [
                "Specifies the percentage of the flexible volume's capacity at which autoshrink is initiated.",
                "The default shrink theshold is 50%. It is an error for the shrink threshold to be greater than or equal to the grow threshold.",
                "Range between 0 and 100"
            ],
            "type": "int"
        }
    },
    "netapp.ontap.na_ontap_volume_clone": {
        "state": {
            "description": [
                "Whether volume clone should be created."
            ],
            "choices": [
                "present"
            ],
            "type": "str",
            "default": "present"
        },
        "parent_volume": {
            "description": [
                "The parent volume of the volume clone being created."
            ],
            "required": true,
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the volume clone being created."
            ],
            "required": true,
            "type": "str",
            "aliases": [
                "volume"
            ]
        },
        "vserver": {
            "description": [
                "Vserver in which the volume clone should be created."
            ],
            "required": true,
            "type": "str"
        },
        "parent_snapshot": {
            "description": [
                "Parent snapshot in which volume clone is created off."
            ],
            "type": "str"
        },
        "parent_vserver": {
            "description": [
                "Vserver of parent volume in which clone is created off."
            ],
            "type": "str"
        },
        "qos_policy_group_name": {
            "description": [
                "The qos-policy-group-name which should be set for volume clone."
            ],
            "type": "str"
        },
        "space_reserve": {
            "description": [
                "The space_reserve setting which should be used for the volume clone."
            ],
            "choices": [
                "volume",
                "none"
            ],
            "type": "str"
        },
        "volume_type": {
            "description": [
                "The volume-type setting which should be used for the volume clone."
            ],
            "choices": [
                "rw",
                "dp"
            ],
            "type": "str"
        },
        "junction_path": {
            "version_added": "2.8.0",
            "description": [
                "Junction path of the volume."
            ],
            "type": "str"
        },
        "uid": {
            "version_added": "2.9.0",
            "description": [
                "The UNIX user ID for the clone volume."
            ],
            "type": "int"
        },
        "gid": {
            "version_added": "2.9.0",
            "description": [
                "The UNIX group ID for the clone volume."
            ],
            "type": "int"
        },
        "split": {
            "version_added": "20.2.0",
            "description": [
                "Split clone volume from parent volume."
            ],
            "type": "bool"
        }
    },
    "netapp.ontap.na_ontap_volume_efficiency": {
        "state": {
            "description": [
                "Whether the specified volume efficiency should be enabled or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies the vserver for the volume."
            ],
            "required": true,
            "type": "str"
        },
        "path": {
            "description": [
                "Specifies the path for the volume.",
                "Either C(path) or C(volume_name) is required.",
                "Requires ONTAP 9.9.1 or later with REST."
            ],
            "type": "str"
        },
        "volume_name": {
            "description": [
                "Specifies the volume name."
            ],
            "version_added": "22.3.0",
            "type": "str"
        },
        "schedule": {
            "description": [
                "Specifies the storage efficiency schedule.",
                "Only supported with ZAPI."
            ],
            "type": "str"
        },
        "policy": {
            "description": [
                "Specifies the storage efficiency policy to use.",
                "By default, the following names are available 'auto', 'default', 'inline-only', '-'.",
                "Requires ONTAP 9.7 or later with REST."
            ],
            "type": "str"
        },
        "enable_compression": {
            "description": [
                "Specifies if compression is to be enabled."
            ],
            "type": "bool"
        },
        "enable_inline_compression": {
            "description": [
                "Specifies if in-line compression is to be enabled."
            ],
            "type": "bool"
        },
        "enable_inline_dedupe": {
            "description": [
                "Specifies if in-line deduplication is to be enabled, only supported on AFF systems or hybrid aggregates."
            ],
            "type": "bool"
        },
        "enable_data_compaction": {
            "description": [
                "Specifies if compaction is to be enabled."
            ],
            "type": "bool"
        },
        "enable_cross_volume_inline_dedupe": {
            "description": [
                "Specifies if in-line cross volume inline deduplication is to be enabled, this can only be enabled when inline deduplication is enabled."
            ],
            "type": "bool"
        },
        "enable_cross_volume_background_dedupe": {
            "description": [
                "Specifies if cross volume background deduplication is to be enabled, this can only be enabled when inline deduplication is enabled."
            ],
            "type": "bool"
        },
        "volume_efficiency": {
            "description": [
                "Start or Stop a volume efficiency operation on a given volume path.",
                "Requires ONTAP 9.11.1 or later with REST."
            ],
            "choices": [
                "start",
                "stop"
            ],
            "version_added": "21.4.0",
            "type": "str"
        },
        "start_ve_scan_all": {
            "description": [
                "Specifies the scanner to scan the entire volume without applying share block optimization.",
                "Only supported with ZAPI."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "start_ve_build_metadata": {
            "description": [
                "Specifies the scanner to scan the entire and generate fingerprint database without attempting the sharing.",
                "Only supported with ZAPI."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "start_ve_delete_checkpoint": {
            "description": [
                "Specifies the scanner to delete existing checkpoint and start the operation from the begining.",
                "Only supported with ZAPI."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "start_ve_queue_operation": {
            "description": [
                "Specifies the operation to queue if an exisitng operation is already running on the volume and in the fingerprint verification phase.",
                "Only supported with ZAPI."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "start_ve_scan_old_data": {
            "description": [
                "Specifies the operation to scan the file system to process all the existing data.",
                "Requires ONTAP 9.11.1 or later with REST."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "start_ve_qos_policy": {
            "description": [
                "Specifies the QoS policy for the operation.",
                "Default is best-effort in ZAPI.",
                "Only supported with ZAPI."
            ],
            "choices": [
                "background",
                "best-effort"
            ],
            "version_added": "21.4.0",
            "type": "str"
        },
        "stop_ve_all_operations": {
            "description": [
                "Specifies that all running and queued operations to be stopped.",
                "Only supported with ZAPI."
            ],
            "version_added": "21.4.0",
            "type": "bool"
        },
        "storage_efficiency_mode": {
            "description": [
                "Storage efficiency mode used by volume. This parameter is only supported on AFF platforms.",
                "Requires ONTAP 9.10.1 or later."
            ],
            "choices": [
                "default",
                "efficient"
            ],
            "type": "str",
            "version_added": "21.14.0"
        }
    },
    "netapp.ontap.na_ontap_volume_snaplock": {
        "name": {
            "description": [
                "The name of the volume to manage."
            ],
            "type": "str",
            "required": true
        },
        "vserver": {
            "description": [
                "Name of the vserver to use."
            ],
            "type": "str",
            "required": true
        },
        "default_retention_period": {
            "description": [
                "Specifies the default retention period that will be applied.",
                "The format is \"<number> <units>\" for example \"10 days\", the following units are valid",
                "seconds",
                "minutes",
                "hours",
                "days",
                "months",
                "years",
                "If this option is specified as \"max\", then maximum_retention_period will be used as the default retention period."
            ],
            "type": "str"
        },
        "autocommit_period": {
            "description": [
                "Specifies the autocommit-period for the snaplock volume.",
                "The format is \"<number> <units>\" for example \"8 hours\", the following units are valid",
                "seconds",
                "minutes",
                "hours",
                "days",
                "months",
                "years"
            ],
            "type": "str"
        },
        "is_volume_append_mode_enabled": {
            "description": [
                "Specifies if the volume append mode must be enabled or disabled.",
                "It can be modified only when the volume is not mounted and does not have any data or Snapshot copy.",
                "Volume append mode is not supported on SnapLock audit log volumes.",
                "When it is enabled, all files created with write permissions on the volume will be WORM appendable files by default.",
                "All WORM appendable files not modified for a period greater than the autocommit period of the volume are also committed to WORM read-only state."
            ],
            "type": "bool"
        },
        "maximum_retention_period": {
            "description": [
                "Specifies the allowed maximum retention period that will be applied.",
                "The format is \"<number> <units>\" for example \"2 years\", the following units are valid",
                "seconds",
                "minutes",
                "hours",
                "days",
                "months",
                "years"
            ],
            "type": "str"
        },
        "minimum_retention_period": {
            "description": [
                "Specifies the allowed minimum retention period that will be applied.",
                "The format is \"<number> <units>\" for example \"1 days\", the following units are valid",
                "seconds",
                "minutes",
                "hours",
                "days",
                "months",
                "years"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_vscan": {
        "enable": {
            "description": [
                "Whether to enable to disable a Vscan"
            ],
            "type": "bool",
            "default": true
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_vscan_on_access_policy": {
        "state": {
            "description": [
                "Whether a Vscan on Access policy is present or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "policy_name": {
            "description": [
                "The name of the policy"
            ],
            "required": true,
            "type": "str"
        },
        "file_ext_to_exclude": {
            "description": [
                "File extensions for which On-Access scanning must not be performed."
            ],
            "type": "list",
            "elements": "str"
        },
        "file_ext_to_include": {
            "description": [
                "File extensions for which On-Access scanning is considered. The default value is '*', which means that all files are considered for scanning except",
                "those which are excluded from scanning."
            ],
            "type": "list",
            "elements": "str"
        },
        "filters": {
            "description": [
                "A list of filters which can be used to define the scope of the On-Access policy more precisely. The filters can be added in any order. Possible values",
                "scan_ro_volume  Enable scans for read-only volume,",
                "scan_execute_access  Scan only files opened with execute-access (CIFS only).",
                "deprecated with REST, use C(scan_readonly_volumes) or C(only_execute_access)."
            ],
            "type": "list",
            "elements": "str"
        },
        "is_scan_mandatory": {
            "description": [
                "Specifies whether access to a file is allowed if there are no external virus-scanning servers available for virus scanning.",
                "If not specified, default value is False in ZAPI."
            ],
            "type": "bool"
        },
        "max_file_size": {
            "description": [
                "Max file-size (in bytes) allowed for scanning. The default value of 2147483648 (2GB) is taken if not provided at the time of creating a policy."
            ],
            "type": "int"
        },
        "paths_to_exclude": {
            "description": [
                "File paths for which On-Access scanning must not be performed."
            ],
            "type": "list",
            "elements": "str"
        },
        "scan_files_with_no_ext": {
            "description": [
                "Specifies whether files without any extension are considered for scanning or not.",
                "If not specified, default value is True in ZAPI."
            ],
            "type": "bool"
        },
        "policy_status": {
            "description": [
                "Status for the created policy"
            ],
            "type": "bool",
            "version_added": "20.8.0"
        },
        "scan_readonly_volumes": {
            "description": [
                "Specifies whether or not read-only volume can be scanned.",
                "If not specified, default value is False in creating policy."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "only_execute_access": {
            "description": [
                "Scan only files opened with execute-access.",
                "If not specified, default value is False in creating policy."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        }
    },
    "netapp.ontap.na_ontap_vscan_on_demand_task": {
        "state": {
            "description": [
                "Whether a Vscan on demand task is present or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "cross_junction": {
            "description": [
                "Specifies whether the On-Demand task is allowed to cross volume junctions",
                "This option is not supported with REST.",
                "This option defaults to False for ZAPI."
            ],
            "type": "bool"
        },
        "directory_recursion": {
            "description": [
                "Specifies whether the On-Demand task is allowed to recursively scan through sub-directories.",
                "This option is not supported with REST.",
                "This option defaults to False for ZAPI."
            ],
            "type": "bool"
        },
        "file_ext_to_exclude": {
            "description": [
                "File-Extensions for which scanning must not be performed.",
                "File whose extension matches with both inclusion and exclusion list is not considered for scanning."
            ],
            "type": "list",
            "elements": "str"
        },
        "file_ext_to_include": {
            "description": [
                "File extensions for which scanning is considered.",
                "The default value is '*', which means that all files are considered for scanning except those which are excluded from scanning.",
                "File whose extension matches with both inclusion and exclusion list is not considered for scanning."
            ],
            "type": "list",
            "elements": "str"
        },
        "max_file_size": {
            "description": [
                "Max file-size (in bytes) allowed for scanning. The default value of 10737418240 (10GB) is taken if not provided at the time of creating a task."
            ],
            "type": "int"
        },
        "paths_to_exclude": {
            "description": [
                "File-paths for which scanning must not be performed."
            ],
            "type": "list",
            "elements": "str"
        },
        "report_directory": {
            "description": [
                "Path from the vserver root where task report is created. The path must be a directory and provided in unix-format from the root of the Vserver.",
                "Example /vol1/on-demand-reports."
            ],
            "type": "str"
        },
        "report_log_level": {
            "description": [
                "Log level for the On-Demand report.",
                "This option is not supported with REST.",
                "This option defaults to 'error' for ZAPI."
            ],
            "choices": [
                "verbose",
                "info",
                "error"
            ],
            "type": "str"
        },
        "request_timeout": {
            "description": [
                "Total request-service time-limit in seconds. If the virus-scanner does not respond within the provided time, scan will be timedout.",
                "This option is not supported with REST."
            ],
            "type": "str"
        },
        "scan_files_with_no_ext": {
            "description": [
                "Specifies whether files without any extension are considered for scanning or not."
            ],
            "type": "bool",
            "default": true
        },
        "scan_paths": {
            "description": [
                "List of paths that need to be scanned. The path must be provided in unix-format and from the root of the Vserver.",
                "Example /vol1/large_files."
            ],
            "type": "list",
            "elements": "str"
        },
        "scan_priority": {
            "description": [
                "Priority of the On-Demand scan requests generated by this task.",
                "This option is not supported with REST.",
                "This option default to 'low' for ZAPI"
            ],
            "choices": [
                "low",
                "normal"
            ],
            "type": "str"
        },
        "schedule": {
            "description": [
                "Schedule of the task. The task will be run as per the schedule.",
                "For running the task immediately, vscan-on-demand-task-run api must be used after creating a task."
            ],
            "type": "str"
        },
        "task_name": {
            "description": [
                "Name of the task."
            ],
            "type": "str",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_vscan_scanner_pool": {
        "state": {
            "description": [
                "Whether a Vscan Scanner pool is present or not"
            ],
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "default": "present"
        },
        "vserver": {
            "description": [
                "the name of the data vserver to use."
            ],
            "required": true,
            "type": "str"
        },
        "hostnames": {
            "description": [
                "List of hostnames of Vscan servers which are allowed to connect to Data ONTAP"
            ],
            "type": "list",
            "elements": "str"
        },
        "privileged_users": {
            "description": [
                "List of privileged usernames. Username must be in the form \"domain-name\\\\user-name\""
            ],
            "type": "list",
            "elements": "str"
        },
        "scanner_pool": {
            "description": [
                "the name of the virus scanner pool"
            ],
            "required": true,
            "type": "str"
        },
        "scanner_policy": {
            "description": [
                "The name of the Virus scanner Policy"
            ],
            "choices": [
                "primary",
                "secondary",
                "idle"
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_vserver_audit": {
        "state": {
            "description": [
                "Whether the specified vserver audit configuration should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies name of the Vserver."
            ],
            "required": true,
            "type": "str"
        },
        "log_path": {
            "description": [
                "The audit log destination path where consolidated audit logs are stored."
            ],
            "type": "str"
        },
        "guarantee": {
            "description": [
                "Indicates whether there is a strict Guarantee of Auditing.",
                "This option requires ONTAP 9.10.1 or later."
            ],
            "type": "bool"
        },
        "enabled": {
            "description": [
                "Specifies whether or not auditing is enabled on the SVM."
            ],
            "type": "bool"
        },
        "events": {
            "description": [
                "Specifies events for which auditing is enabled on the SVM."
            ],
            "type": "dict",
            "suboptions": {
                "authorization_policy": {
                    "description": [
                        "Authorization policy change events."
                    ],
                    "type": "bool"
                },
                "cap_staging": {
                    "description": [
                        "Central access policy staging events."
                    ],
                    "type": "bool"
                },
                "cifs_logon_logoff": {
                    "description": [
                        "CIFS logon and logoff events."
                    ],
                    "type": "bool"
                },
                "file_operations": {
                    "description": [
                        "File operation events."
                    ],
                    "type": "bool"
                },
                "file_share": {
                    "description": [
                        "File share category events."
                    ],
                    "type": "bool"
                },
                "security_group": {
                    "description": [
                        "Local security group management events."
                    ],
                    "type": "bool"
                },
                "user_account": {
                    "description": [
                        "Local user account management events."
                    ],
                    "type": "bool"
                }
            }
        },
        "log": {
            "description": [
                "Specifies events for which auditing is enabled on the SVM."
            ],
            "type": "dict",
            "suboptions": {
                "format": {
                    "description": [
                        "This option describes the format in which the logs are generated by consolidation process. Possible values are,",
                        "xml - Data ONTAP-specific XML log format",
                        "evtx - Microsoft Windows EVTX log format"
                    ],
                    "choices": [
                        "xml",
                        "evtx"
                    ],
                    "type": "str"
                },
                "retention": {
                    "description": [
                        "This option describes the count and time to retain the audit log file."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "count": {
                            "description": [
                                "Determines how many audit log files to retain before rotating the oldest log file out.",
                                "This is mutually exclusive with duration."
                            ],
                            "type": "int"
                        },
                        "duration": {
                            "description": [
                                "Specifies an ISO-8601 format date and time to retain the audit log file.",
                                "The audit log files are deleted once they reach the specified date/time.",
                                "This is mutually exclusive with count."
                            ],
                            "type": "str"
                        }
                    }
                },
                "rotation": {
                    "description": [
                        "Audit event log files are rotated when they reach a configured threshold log size or are on a configured schedule.",
                        "When an event log file is rotated, the scheduled consolidation task first renames the active converted file to a time-stamped archive file, and then creates a new active converted event log file."
                    ],
                    "type": "dict",
                    "suboptions": {
                        "size": {
                            "description": [
                                "Rotates logs based on log size in bytes.",
                                "Default value is 104857600."
                            ],
                            "type": "int"
                        },
                        "schedule": {
                            "description": [
                                "Rotates the audit logs based on a schedule by using the time-based rotation parameters in any combination.",
                                "The rotation schedule is calculated by using all the time-related values."
                            ],
                            "type": "dict",
                            "version_added": "22.11.0",
                            "suboptions": {
                                "days": {
                                    "description": [
                                        "Specifies the day of the month schedule to rotate audit log. Specify -1 to rotate the audit logs all days of a month."
                                    ],
                                    "type": "list",
                                    "elements": "int"
                                },
                                "hours": {
                                    "description": [
                                        "Specifies the hourly schedule to rotate audit log. Specify -1 to rotate the audit logs every hour."
                                    ],
                                    "type": "list",
                                    "elements": "int"
                                },
                                "minutes": {
                                    "description": [
                                        "Specifies the minutes schedule to rotate the audit log."
                                    ],
                                    "type": "list",
                                    "elements": "int"
                                },
                                "months": {
                                    "description": [
                                        "Specifies the months schedule to rotate audit log. Specify -1 to rotate the audit logs every month."
                                    ],
                                    "type": "list",
                                    "elements": "int"
                                },
                                "weekdays": {
                                    "description": [
                                        "Specifies the weekdays schedule to rotate audit log. Specify -1 to rotate the audit logs every day."
                                    ],
                                    "type": "list",
                                    "elements": "int"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "netapp.ontap.na_ontap_vserver_cifs_security": {
        "vserver": {
            "description": [
                "name of the vserver."
            ],
            "required": true,
            "type": "str"
        },
        "kerberos_clock_skew": {
            "description": [
                "The clock skew in minutes is the tolerance for accepting tickets with time stamps that do not exactly match the host's system clock."
            ],
            "type": "int"
        },
        "kerberos_ticket_age": {
            "description": [
                "Determine the maximum amount of time in hours that a user's ticket may be used for the purpose of Kerberos authentication."
            ],
            "type": "int"
        },
        "kerberos_renew_age": {
            "description": [
                "Determine the maximum amount of time in days for which a ticket can be renewed."
            ],
            "type": "int"
        },
        "kerberos_kdc_timeout": {
            "description": [
                "Determine the timeout value in seconds for KDC connections."
            ],
            "type": "int"
        },
        "is_signing_required": {
            "description": [
                "Determine whether signing is required for incoming CIFS traffic."
            ],
            "type": "bool"
        },
        "is_password_complexity_required": {
            "description": [
                "Determine whether password complexity is required for local users."
            ],
            "type": "bool"
        },
        "is_aes_encryption_enabled": {
            "description": [
                "Determine whether AES-128 and AES-256 encryption mechanisms are enabled for Kerberos-related CIFS communication."
            ],
            "type": "bool"
        },
        "is_smb_encryption_required": {
            "description": [
                "Determine whether SMB encryption is required for incoming CIFS traffic."
            ],
            "type": "bool"
        },
        "lm_compatibility_level": {
            "description": [
                "Determine the LM compatibility level."
            ],
            "choices": [
                "lm_ntlm_ntlmv2_krb",
                "ntlm_ntlmv2_krb",
                "ntlmv2_krb",
                "krb"
            ],
            "type": "str"
        },
        "referral_enabled_for_ad_ldap": {
            "description": [
                "Determine whether LDAP referral chasing is enabled or not for AD LDAP connections."
            ],
            "type": "bool"
        },
        "session_security_for_ad_ldap": {
            "description": [
                "Determine the level of security required for LDAP communications."
            ],
            "choices": [
                "none",
                "sign",
                "seal"
            ],
            "type": "str"
        },
        "smb1_enabled_for_dc_connections": {
            "description": [
                "Determine if SMB version 1 is used for connections to domain controllers."
            ],
            "choices": [
                "false",
                "true",
                "system_default"
            ],
            "type": "str"
        },
        "smb2_enabled_for_dc_connections": {
            "description": [
                "Determine if SMB version 2 is used for connections to domain controllers."
            ],
            "choices": [
                "false",
                "true",
                "system_default"
            ],
            "type": "str"
        },
        "use_start_tls_for_ad_ldap": {
            "description": [
                "Determine whether to use start_tls for AD LDAP connections."
            ],
            "type": "bool"
        },
        "encryption_required_for_dc_connections": {
            "description": [
                "Specifies whether encryption is required for domain controller connections."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        },
        "use_ldaps_for_ad_ldap": {
            "description": [
                "Determine whether to use LDAPS for secure Active Directory LDAP connections."
            ],
            "type": "bool",
            "version_added": "21.20.0"
        }
    },
    "netapp.ontap.na_ontap_vserver_peer": {
        "state": {
            "choices": [
                "present",
                "absent"
            ],
            "type": "str",
            "description": [
                "Whether the specified vserver peer should exist or not."
            ],
            "default": "present"
        },
        "vserver": {
            "description": [
                "Specifies name of the source Vserver in the relationship."
            ],
            "required": true,
            "type": "str"
        },
        "applications": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of applications which can make use of the peering relationship.",
                "FlexCache supported from ONTAP 9.5 onwards."
            ]
        },
        "peer_vserver": {
            "description": [
                "Specifies name of the peer Vserver in the relationship."
            ],
            "required": true,
            "type": "str"
        },
        "peer_cluster": {
            "description": [
                "Specifies name of the peer Cluster.",
                "Required for creating the vserver peer relationship with a remote cluster"
            ],
            "type": "str"
        },
        "local_name_for_peer": {
            "description": [
                "Specifies local name of the peer Vserver in the relationship.",
                "Use this if you see \"Error creating vserver peer ... Vserver name conflicts with one of the following\"."
            ],
            "type": "str"
        },
        "local_name_for_source": {
            "description": [
                "Specifies local name of the source Vserver in the relationship.",
                "Use this if you see \"Error accepting vserver peer ... System generated a name for the peer Vserver because of a naming conflict\"."
            ],
            "type": "str"
        },
        "dest_hostname": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination hostname or IP address.",
                "Required for creating the vserver peer relationship with a remote cluster."
            ],
            "type": "str"
        },
        "dest_username": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination username.",
                "Optional if this is same as source username."
            ],
            "type": "str"
        },
        "dest_password": {
            "description": [
                "DEPRECATED - please use C(peer_options).",
                "Destination password.",
                "Optional if this is same as source password."
            ],
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_vserver_peer_permissions": {
        "state": {
            "description": [
                "Whether the specified vserver peer permission should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "vserver": {
            "description": [
                "Specifies name of the source Vserver in the relationship."
            ],
            "required": true,
            "type": "str"
        },
        "applications": {
            "type": "list",
            "elements": "str",
            "required": true,
            "description": [
                "List of applications which can make use of the peering relationship.",
                "FlexCache supported from ONTAP 9.5 onwards."
            ]
        },
        "cluster_peer": {
            "description": [
                "Specifies name of the peer Cluster."
            ],
            "type": "str",
            "required": true
        }
    },
    "netapp.ontap.na_ontap_wait_for_condition": {
        "name": {
            "description": [
                "The name of the event to check for.",
                "snapmirror_relationship was added in 21.22.0."
            ],
            "choices": [
                "snapmirror_relationship",
                "sp_upgrade",
                "sp_version"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "whether the conditions should be present or absent.",
                "if C(present), the module exits when any of the conditions is observed.",
                "if C(absent), the module exits with success when None of the conditions is observed."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "conditions": {
            "description": [
                "one or more conditions to match",
                "C(state) and/or C(transfer_state) for C(snapmirror_relationship),",
                "C(is_in_progress) for C(sp_upgrade),",
                "C(firmware_version) for C(sp_version)."
            ],
            "type": "list",
            "elements": "str",
            "required": true
        },
        "polling_interval": {
            "description": [
                "how ofen to check for the conditions, in seconds."
            ],
            "default": 5,
            "type": "int"
        },
        "timeout": {
            "description": [
                "how long to wait for the conditions, in seconds."
            ],
            "default": 180,
            "type": "int"
        },
        "attributes": {
            "description": [
                "a dictionary of custom attributes for the condition.",
                "C(sp_upgrade), C(sp_version) require C(node).",
                "C(sp_version) requires C(expected_version).",
                "C(snapmirror_relationship) requires C(destination_path) and C(expected_state) or C(expected_transfer_state) to match the condition(s)."
            ],
            "type": "dict"
        }
    },
    "netapp.ontap.na_ontap_wwpn_alias": {
        "state": {
            "description": [
                "Whether the specified alias should exist or not."
            ],
            "choices": [
                "present",
                "absent"
            ],
            "default": "present",
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the alias to create or delete."
            ],
            "required": true,
            "type": "str"
        },
        "wwpn": {
            "description": [
                "WWPN of the alias."
            ],
            "type": "str"
        },
        "vserver": {
            "description": [
                "The name of the vserver to use."
            ],
            "required": true,
            "type": "str"
        }
    },
    "netapp.ontap.na_ontap_zapit": {
        "zapi": {
            "description": [
                "A dictionary for the zapi and arguments.",
                "An XML tag I(<tag>value</tag>) is a dictionary with tag as the key.",
                "Value can be another dictionary, a list of dictionaries, a string, or nothing.",
                "eg I(<tag/>) is represented as I(tag:)",
                "A single zapi can be called at a time.  Ansible warns if duplicate keys are found and only uses the last entry."
            ],
            "required": true,
            "type": "dict"
        },
        "vserver": {
            "description": [
                "if provided, forces vserver tunneling.  username identifies a cluster admin account."
            ],
            "type": "str"
        }
    }
}