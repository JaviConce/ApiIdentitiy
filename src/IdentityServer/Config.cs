﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using System.Collections.Generic;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<ApiResource> Apis =>
        new List<ApiResource>
        {
            new ApiResource("api1", "My API")
        };
        public static IEnumerable<Client> Clients => new List<Client>
        {
        new Client
        {
            ClientId = "api1",

            // no interactive user, use the clientid/secret for authentication
            AllowedGrantTypes = GrantTypes.ClientCredentials,

            // secret for authentication
            ClientSecrets =
            {
                new Secret("api1".Sha256())
            },

            // scopes that client has access to
            AllowedScopes = { "api1" }
        },
         new Client
        {
            ClientId = "OSX",

            // no interactive user, use the clientid/secret for authentication
            AllowedGrantTypes = GrantTypes.ClientCredentials,
            //esto lo añadi para que fuera
            RedirectUris =           { "http://localhost:5001/callback.html" },
            PostLogoutRedirectUris = { "http://localhost:5001/index.html" },
            AllowedCorsOrigins =     { "http://localhost:5001" },

            // secret for authentication
            ClientSecrets =
            {
                new Secret("OSXPassword".Sha256())
            },

            // scopes that client has access to
            AllowedScopes = { "api1" }
        }
         };
    }
}